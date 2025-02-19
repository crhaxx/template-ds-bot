const { ActivityType, Client } = require("discord.js");

/**
 *
 * @param {Client} client
 */

module.exports = (client) => {
  let status = [
    {
      name: `${client.user.tag}`,
      type: ActivityType.Playing,
    },
  ];

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
    console.log("Status changed to: " + status[random].name);
  }, 30000);
};
