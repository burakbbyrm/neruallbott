const Discord = require('discord.js')
const db = require('quick.db')

function uyariLar(arr, val) {//Lauren
  var count = 0;
  arr.forEach((v) => (v === val && count++));
  return count;
}

exports.run = async(client, message, args) => {
  var uyariYiyenler = []
  await message.guild.members.forEach(async(m) => {
    var x = await db.fetch(`uyarı_${m.user.id}`)
    if(!x || x == 0) return
    else {
      for(var i=0;i<x;i++) {
        uyariYiyenler.push(m.user.tag)
      }
    }
  })
  
  var uyarLar = ""
  message.guild.members.forEach(m => {
    var sayi = uyariLar(uyariYiyenler, m.user.tag)
    if(sayi == 0) return;
    else {
      uyarLar+=`${m.user.tag}: ${sayi} Adet Uyarı\n`
    }
  })
              if(uyarLar < 1) uyarLar = "Bu sunucuda hiçbir üye uyarılmamış."
  const embed = new Discord.RichEmbed()
  
  .setTitle("Uyarı Listesi")
  .setDescription(uyarLar)
  
  message.channel.send(embed)
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tümuyarılar"],
  permLevel: 0
}
exports.help = {
  name: "uyarılistesi"
}