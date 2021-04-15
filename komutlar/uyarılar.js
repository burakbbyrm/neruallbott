const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) =>{
    
  const kullanıcı = message.author; //Lauren
  let burak = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!burak) return message.channel.send("Bir üye etiketlemelisin.")
  
  let uyarı = db.fetch(`uyarı_${burak.id}`)
            if(uyarı < 1) uyarı = "0"
  const lauren = new Discord.RichEmbed()
  
  .setTitle("Uyarılar")
  .addField("Üye:", `<@${burak.id}>`)
  .addField("Toplam Uyarısı:", `${uyarı}`)
  
  message.channel.send(lauren)
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "uyarılar"
}