const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const TARGET_WORD = "req_word";
const DATA_FILE = "data.json";

let data = {};
if (fs.existsSync(DATA_FILE)) {
  data = JSON.parse(fs.readFileSync(DATA_FILE));
}

function saveData() {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const guildId = message.guild.id;
  const userId = message.author.id;
  const content = message.content;

  // initialize server + user
  if (!data[guildId]) data[guildId] = {};
  if (!data[guildId][userId]) data[guildId][userId] = 0;

  // case-insensitive + exact word match
  const regex = new RegExp(`\\b${TARGET_WORD}\\b`, "i");

  if (regex.test(content)) {
    data[guildId][userId]++;
    saveData();
  }

  // my Count
  if (content.toLowerCase() === "!mycount") {
    const count = data[guildId][userId] || 0;
    return message.reply(`You said "${TARGET_WORD}" ${count} times`);
  }

  // total Count
  if (content.toLowerCase() === "!count") {
    const total = Object.values(data[guildId]).reduce((a, b) => a + b, 0);
    return message.reply(`Total "${TARGET_WORD}" count: ${total}`);
  }

  // Leaderboard 
  if (content.toLowerCase() === "!top") {
    const sorted = Object.entries(data[guildId])
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    let leaderboard = "🏆 Top Users:\n";

    for (let i = 0; i < sorted.length; i++) {
      const [id, count] = sorted[i];

      let member;
      try {
        member = await message.guild.members.fetch(id);
      } catch {
        member = null;
      }

      const name = member
        ? (member.nickname || member.user.username)
        : "Unknown User";

      leaderboard += `${i + 1}. ${name} — ${count}\n`;
    }

    return message.reply({
      content: leaderboard,
      allowedMentions: { parse: [] } // 🚫 ensures no accidental pings
    });
  }
});

client.login(process.env.TOKEN);
