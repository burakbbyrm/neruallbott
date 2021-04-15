const { get } = require("node-superfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, color, prefix) => {
  let fake = await db.fetch(`fake_${msg.guild.id}`)
  message.channel.send(fake)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["test"],
  permLevel: 0
};

exports.help = {
  name: "magik",
  description: "Bot i",
  usage: "istatistik"
};