const Discord = require('discord.js')
const os = require('os')
var speedTest = require('speedtest-net');

exports.run = (client, message) => {
  var osType = os.type();

     message.channel.send(`Gerekli bilgiler hesaplanıyor...`).then(m => m.delete(5000));
 
  if (osType === 'Darwin') osType = 'macOS'
  else if (osType === 'Windows') osType = 'Windows'
  else if (osType === 'Linux') osType = 'Linux'
  else if (osType === 'Ubuntu') osType = 'Ubuntu'
  else osType = os.type();
    var test = speedTest({maxTime: 5000});
    test.on('data', data => {
const embed = new Discord.RichEmbed()
 .setColor('#000000')
.setTitle('**İnternet Bilgileri**')//cortex
.addField(`:arrow_down: İndirme ve Yükleme:`, `İndirme: **${data.speeds.download}**mbps\n:arrow_up: Yükleme: **${data.speeds.upload}**mbps`)
.addField(` :round_pushpin: Ping:`, `Ping: **${client.ping}**`)
.addField(`:level_slider: İşletim Sistemi:`, `**${osType}**\n\n:desktop: İnternet Sağlayıcısı: **${data.client.isp}** \n \n:file_cabinet: Host: **${data.server.host}**`)

//Pudochu is here.

message.channel.send(embed)
});
 
    test.on('error', err => {
  console.log(err);
});
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['speedtest', 'speed-test', 'cortex'],
  permLevel: 0,
  kategori: "sahip"
};

exports.help = {
  name: 'hız-test',
  description: 'speedtest yapar',
  usage: 'speedtest'
};