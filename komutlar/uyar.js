const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) =>{
  
 if (!message.member.hasPermission("MANAGE_MESSAGES")) { return message.channel.send("Bu komutu kullanabilmek için yeterli iznin yok.")}
  
  var uyarılog = db.fetch(`uyarlog_${message.guild.id}`)
  
  const yetkili = message.author; 
  let user = message.mentions.users.first() || args[0]
  var member = message.guild.member(user)
  if (!user) return message.channel.send("Bir üye etiketlemelisin.")
  
  let reason = message.content.split(" ").slice(2).join(" ");
  if (!reason) reason = "Sebep belirtilmemiş."
  let uyarı = db.add(`uyarı_${user.id}`, 1)
  if (!uyarılog) return message.channel.send("Bir üyeyi uyarmadan önce log kanalı ayarlamalısın.\n**#logkanal #kanal**")
  message.channel.send(`<@${user.id}> adlı üye uyarıldı! Gerekli işlemleri log kanalına yolladım.`)
  
  const embed = new Discord.RichEmbed()
  
  .setTitle("Bir Üye Uyarıldı")
  .setDescription(`**Uyarılan Üye:** ${user.tag} (${user.id})\n**Yetkili:** ${yetkili.tag}\n**Sebep:** ${reason}`)
  .setColor("RED")
  .setFooter("NeruaL Bot - Uyarı Sistemi") 
  message.client.channels.get(uyarılog).send(embed) 
  user.send(`**${message.guild.name}** adlı sunucuda **${yetkili.tag}** tarafından **${reason}** sebebiyle uyarıldın.`) 
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["uyar"],
  permLevel: 0
}
exports.help = {
  name: "uyar"
}