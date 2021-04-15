const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) =>{
  
 if (!message.member.hasPermission("MANAGE_MESSAGES")) { return message.channel.send("Bu komutu kullanabilmek için yeterli iznin yok.")}
  
  var uyarılog = db.fetch(`uyarlog_${message.guild.id}`)
  
  const yetkili = message.author; //kimin yaptığını loga düşeceği için yetkili gerekli
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!user) return message.channel.send("Bir üye etiketlemelisin.")
  
  if (!uyarılog) return message.channel.send("Bir üyeyi uyarmadan önce log kanalı ayarlamalısın.")
  
  let uyarı = db.subtract(`uyarı_${user.id}`, 1)
  
  message.channel.send(`İşlem başarılı, gerekli bilgileri log kanalına gönederdim.`)
  
  const embed = new Discord.RichEmbed()
  
  .setTitle("Bir Uyarı Silindi")
  .addField("Uyarısı Silinen Üye:", `<@${user.id}>`)
  .addField("Yetkili:", `${yetkili}`)
  message.client.channels.get(uyarılog).send(embed) 
  user.send(`**${message.guild.name}** adlı sunucuda **${yetkili.tag}** tarafından uyarın silindi.`) 
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["uyarısil"],
  permLevel: 0
}
exports.help = {
  name: "uyarı-sil"
}