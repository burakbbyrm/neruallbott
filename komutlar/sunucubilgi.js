
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const moment = require('moment');
require('moment-duration-format');
exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("MANAGE_GUILD")){
    
    message.channel.send("bir daha yetkin yokken kullanmaya çalışırsan anneni sikerim!")}
  else {
    
    
    var aylar = {
      "01": "Ocak",
      "02": "Şubat",
      "03": "Mart",
      "04": "Nisan",
      "05": "Mayıs",
      "06": "Haziran",
      "07": "Temmuz",
      "08": "Ağustos",
      "09": "Eylül",
      "10": "Ekim",
      "11": "Kasım",
      "12": "Aralık"
    }
    
    let region = {
        "us-central": "Amerika :flag_us:",
        "us-east": "Doğu Amerika :flag_us:",
        "us-south": "Güney Amerika :flag_us:",
        "us-west": "Batı Amerika :flag_us:",
        "eu-west": "Batı Avrupa :flag_eu:",
        "eu-central": "Orta Avrupa :flag_eu:",
        "europe": "Avrupa :flag_eu:",
        "singapore": "Singapur :flag_sg:",
        "london": "Londra :flag_gb:",
        "japan": "Japonya :flag_jp:",
        "russia": "Rusya :flag_ru:",
        "hongkong": "Hong Kong :flag_hk:",
        "brazil": "Brezilya :flag_br:",
        "singapore": "Singapur :flag_sg:",
        "sydney": "Sidney :flag_au:",
        "india": "Hindistan :flag_in:",
        "dubai": "Dubai :flag_ae:",
        "amsterdam": "Amsterdam :flag_nl:",
        "frankfurt": "Frankfurt :flag_de:",
        "southafrica": "Güney Afrika :flag_za:"
    }
    let güvenlik = {
      "0": "Sunucu Doğrulaması Yok.",
      "1": "Düşük (E-posta Doğrulaması)",
      "2": "Orta (Sadece 5 Dakikalık Üyeler)",
      "3": "Yüksek (Sadece 10 Dakikalık Üyeler)",
      "4": "Çok Yüksek (Telefon Doğrulamalı)"
    }
    
    let üyesayisi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayisi - botlar;
    
var duration = moment.duration(client.uptime).format(" D [gün] H [saat] m [dakika] s [saniye]")

var embed = new Discord.RichEmbed()
.setAuthor(`Sunucu Bilgileri`)
.setThumbnail(message.guild.iconURL)
.addField("Genel Bilgiler", `**Sunucu Bölgesi**: ${region[message.guild.region]}\n**Sunucu Doğrulama Seviyesi**: ${güvenlik[message.guild.verificationLevel]}`)
.addField("Diğer Bilgiler", `**Sunucu Oluşturulma Tarihi**: ${moment(message.guild.createdAt).format('DD')} ${aylar[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY')}\n**Sunucu Varsayılan Kanalı**: ${message.guild.defaultChannel ? message.guild.defaultChannel : "Varsayılan kanal ayarlı değil."}`)
.addField("Üye Bilgileri", `**Toplam Üye Sayısı**: ${üyesayisi}\n**Bot Sayısı**: ${botlar}`)
.addField("Emojiler", `**Emoji Sayısı**: ${message.guild.emojis.size}`)
.addField("Rol Sayısı", `**Toplam Rol Sayısı**: ${message.guild.roles.map(a => a.name), message.guild.roles.size}`)
.addField("Kanal Sayısı", `**Toplam Kanal Sayısı**: ${message.guild.channels.map(a => a.name), message.guild.channels.size}\n**Mevcut AFK Kanalı**: ${message.guild.afkChannel ? message.guild.afkChannel : "AFK kanalı ayarlanmamış."}`)
.setTimestamp()

message.channel.send(embed)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sunucubilgi"],
  permlevel: 0
}

exports.help = {
  name: "sunucubilgi",
  destcription: "annen",
  usage: "annen2"
};