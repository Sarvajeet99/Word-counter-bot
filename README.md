# 🤖 Discord Word Counter Bot

A simple and efficient Discord bot that tracks how many times users say a specific word in a server and displays rankings.

---

## 🚀 Features

* ✅ Case-insensitive word tracking
* ✅ Counts multiple occurrences in a single message
* ✅ Per-user tracking
* ✅ Leaderboard system (`!top`)
* ✅ No-ping mentions (clean UI)
* ✅ Persistent storage using JSON

---

## 🧩 Commands

| Command    | Description                            |
| ---------- | -------------------------------------- |
| `nmycount` | Shows how many times you used the word |
| `ncount`   | Shows total word count in the server   |
| `ntop`     | Displays leaderboard of top users      |

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/YOUR_USERNAME/Word-counter-bot.git
cd Word-counter-bot
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Create `.env` file

Create a file named `.env` in the root folder and add:

```
TOKEN=your_discord_bot_token_here
```

---

### 4. Run the bot

```
npm start
```

---

## 📦 Project Structure

```
.
├── index.js / count.js
├── package.json
├── .gitignore
├── .env.example
└── README.md
```

---

## 🔐 Environment Variables

| Variable | Description            |
| -------- | ---------------------- |
| `TOKEN`  | Your Discord bot token |

---

## 📝 Notes

* `data.json` is automatically created when the bot runs
* Make sure `.env` is NOT uploaded to GitHub
* Reset your bot token if it was ever exposed

---

## 🛠 Tech Stack

* Node.js
* discord.js

---

## 🎯 Future Improvements

* Multi-word tracking
* MongoDB integration
* Web dashboard (analytics)
* Daily/weekly leaderboards

---

## 📜 License

This project is open-source and free to use.

---

## ⭐ If you like this project

Give it a star on GitHub and feel free to contribute!
