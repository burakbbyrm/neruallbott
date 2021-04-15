const Discord = require('discord.js');
 
exports.run = (client, message, args) => {
 message.react("✅")
  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://media.discordapp.net/attachments/813111835602583585/813308358177849374/unknown.png')
    .setFooter(`Yardım Menüsü`)
    .setDescription("[Komutlar](https://komutlar.nerualbot.ml) → Komutları görmek için linke tıklayın.\n\n[Kontrol Paneli](https://nerualpanel.cf) → Botumuzun site üzerindeki kontrol panelini görmek için tıklayın.")
  message.author.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};
 
exports.help = {
  name: 'yardım',
  description: '[Admin Komutu]',
  usage: ''
};