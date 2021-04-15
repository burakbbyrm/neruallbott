const { get } = require("node-superfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, color, prefix) => {
  message.channel.startTyping()
  let uptime = message.mentions.users.first() || message.author
  let randomayar = Math.floor(Math.random() * 11);
  const { body } = await get(`https://nekobot.xyz/api/imagegen?type=magik&image=${uptime.displayAvatarURL}&intensity=${randomayar}`); 
  message.channel.send({file:body.message}).then(message =>
          message.channel.stopTyping()                        
                                  )
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["magik"],
  permLevel: 0
};

exports.help = {
  name: "magik",
  description: "Bot i",
  usage: "istatistik"
};