![Banner](https://i.imgur.com/mTvDmP5.png)

![GitHub forks](https://img.shields.io/github/forks/crhaxx/template-ds-bot)
![GitHub Repo stars](https://img.shields.io/github/stars/crhaxx/template-ds-bot)
![GitHub top language](https://img.shields.io/github/languages/top/crhaxx/template-ds-bot)
![GitHub last commit](https://img.shields.io/github/last-commit/crhaxx/template-ds-bot)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/crhaxx/template-ds-bot)

# 📝 How to Build

To build the packages, follow these steps:

```bash
# Open a terminal (Command Prompt or PowerShell for Windows, Terminal for macOS or Linux)

# Ensure Nodejs is installed
# Visit https://nodejs.org/en to download Nodejs

# Ensure Git is installed
# Visit https://git-scm.com to download and install console Git if not already installed

# Clone the repository
git clone https://github.com/crhaxx/template-ds-bot.git

# Navigate to the project directory
cd template-ds-bot

# Install necessary libraries
npm install discord.js dotenv ms
```

# 📄 Install the necessary tools

Run following command in your terminal to check the installed version of nodemon on your computer

```bash
nodemon -v
```

If your nodemon version is low or you do not have nodemon installed yet, run the following command in your terminal to install nodemon globally

```bash
npm install -g nodemon
```

# ⚙️ Customize your settings

Create an `.env` file and set the value of **TOKEN** (bot token)

```bash
TOKEN = 123
```

Set **testServer**, **clientId**, **devs**, **reactionRolesChannelID** in the `config.json` file

```bash
{
  "testServer": "",
  "clientId": "",
  "devs": [""]
}
```

# 🔑 How to start

In the terminal run the following command

```bash
nodemon
```
