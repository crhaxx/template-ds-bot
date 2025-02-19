const { Client, Interaction } = require("discord.js");
const ms = require("ms");

module.exports = {
  name: "uptime",
  description: "Bot's uptime",

  /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   */

  callback: (client, interaction) => {
    const msDuration = ms(client.uptime);
    interaction.reply(`Bot is online: ${msDuration}`);
  },
};
