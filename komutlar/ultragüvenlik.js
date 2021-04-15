const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
 const talkedRecently = new Set();
 let ayarlar = ['aç','kapat']
exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) { return message.channel.send("Bu komutu kullanabilmek için yeterli iznin yok.")}
           if (talkedRecently.has(message.author.id)) {
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
  if (args[0] == 'aç') {
    if(db.has(`ultra_${message.guild.id}`)) return message.channel.send("Sistem zaten aktif.")
        db.set(`ultra_${message.guild.id}`, true),
        db.set(`küfürE_${message.guild.id}`, true),
        db.set(`linkE_${message.guild.id}`, true),
          db.set(`spamE_${message.guild.id}`, true)
        db.set(`tkr_${message.guild.id}`, true),
        db.set(`capsE_${message.guild.id}`, true),
        db.set(`ddosE_${message.guild.id}`, true),
        db.set(`emojiE_${message.guild.id}`, true),
        db.set(`kanalE_${message.guild.id}`, true),
        db.set(`rolE_${message.guild.id}`, true),
          db.set(`kufru`, true)
        db.set(`rightE_${message.guild.id}`, true)
 return message.channel.send(new Discord.RichEmbed().setColor("GREEN").setDescription(`Ultra Güvenlik Sistemi başarıyla **açıldı**. \n\n**Aktif olan tüm sistemler:**\n<:nerualok:814422337779662868>SPAM Engel\n<:nerualok:814422337779662868>Reklam Filtresi\n<:nerualok:814422337779662868>Capslock Filtresi\n<:nerualok:814422337779662868>Tekrarlanan Mesaj Engel Filtresi\n<:nerualok:814422337779662868>DDOS Koruması\n<:nerualok:814422337779662868>Rol Silme Koruması\n<:nerualok:814422337779662868>Kanal Silme Koruması\n<:nerualok:814422337779662868>Emoji Silme Koruması\n<:nerualok:814422337779662868>Sağ Tık Ban Sistemi\n\nNOT: Eğer sistemdeki korumaları tek tek istediğin gibi açıp kapatmak istiyorsan, [Web Sitemize](https://nerualpanel.cf) gir.`))
  }
  if (args[0] == 'kapat') {
        if(!db.has(`ultra_${message.guild.id}`)) return message.channel.send("Sistem zaten kapalı.")
       db.delete(`ultra_${message.guild.id}`),
       db.delete(`linkE_${message.guild.id}`),
       db.delete(`capsE_${message.guild.id}`),
                   db.delete(`spamE_${message.guild.id}`)
                 db.delete(`küfürE_${message.guild.id}`),
       db.delete(`tkr_${message.guild.id}`),
        db.delete(`ddosE_${message.guild.id}`),
        db.delete(`emojiE_${message.guild.id}`),
        db.delete(`kanalE_${message.guild.id}`),
        db.delete(`rolE_${message.guild.id}`),
        db.delete(`rightE_${message.guild.id}`)
     return message.channel.send(new Discord.RichEmbed().setColor("RED").setDescription(`Ultra Güvenlik Sistemi başarıyla **kapatıldı**.\n\**\nKapatılan tüm sistemler:**\n<:nerualok:814422337779662868>SPAM Engel (5. Seviye)\n<:nerualok:814422337779662868>Reklam Filtresi\n<:nerualok:814422337779662868>Capslock Filtresi\n<:nerualok:814422337779662868>Tekrarlanan Mesaj Engel Filtresi\n<:nerualok:814422337779662868>DDOS Koruması\n<:nerualok:814422337779662868>Rol Silme Koruması\n<:nerualok:814422337779662868>Kanal Silme Koruması\n<:nerualok:814422337779662868>Emoji Silme Koruması\n<:nerualok:814422337779662868>Sağ Tık Ban Sistemi\n\nNOT: Eğer sistemdeki korumaları tek tek istediğin gibi açıp kapatmak istiyorsan, [Web Sitemize](https://nerualpanel.cf) gir.`))
  }
     } 
  



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ultragüvenlik', "ultra", "kk"],
  permLevel: 0
};
 
exports.help = {
  name: 'Ultra Güvenlik Sistemi',
  description: '[Admin Komutu]',
  usage: ''
};