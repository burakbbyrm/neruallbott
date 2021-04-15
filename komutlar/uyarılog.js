const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message) => {
  
   if(!message.member.hasPermissions('ADMINISTRATOR')) return message.channel.send(`:x: Bu komutu kullanabilmek için yeterli yetkin yok.`)
  
  let kanal = message.mentions.channels.first();
  if (!kanal) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('GREEN').setAuthor("Lütfen ayarlanacak kanalı etiketleyin.", message.author.avatarURL))
  
  var uyarılog = db.set(`uyarlog_${message.guild.id}`, kanal.id)
  
  message.channel.sendEmbed(new Discord.RichEmbed().setColor('GREEN').setAuthor("Log kanalı başarıyla ayarlandı.", message.author.avatarURL))
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["uyarılog", "logkanal"],
  permLevel: 0
}
exports.help = {
  name: "uyarılog-ayarla"
}

//Lauren