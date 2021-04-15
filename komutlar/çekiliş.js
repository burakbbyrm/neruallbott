const Discord = require("discord.js");
const db = require("quick.db");
const use = require("useful-tools");
const moment = require("moment");
require("moment-duration-format");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) { return message.channel.send("Bu komutu kullanabilmek için yeterli iznin yok.")}
  let csc = message.channel
  let cst2 = args[0]
  let csts = args[1];
  let csw = args.slice(2).join(" ")
  
  if (!cst2)
    return message.reply(
      "Hey, çekilişin ne kadar süreceğini belirtmedin!\nÖrnek kullanım:**#çekiliş 5dakika 2kazanan Premium Çekilişi**"
    );
  if (!csts)
    return message.reply(
      "Hey, çekilişi kaç kişinin kazanacağını belirtmedin!\nÖrnek kullanım:**#çekiliş 5dakika 2kazanan Premium Çekilişi**"
    );
  if (!csw)
    return message.reply(
      "Hey, çekilişin ödülünü belirtmedin!\nÖrnek kullanım:**#çekiliş 5dakika 2kazanan Premium Çekilişi**"
    ); 

  let x = message.content
let ise = x.split(" ").filter(val => val.match(/\d+/)).map(x => x.split("").filter(val => val.match(/\d+/)).join(""))

  let sures;
  let cst1 = ise[0]
  let cstss = ise[1]
  if (cst2.includes("saniye")) sures = cst1 * 1000;
  if (cst2.includes("dakika")) sures = cst1 * 60 * 1000;
  if (cst2.includes("saat")) sures = cst1 * 60 * 60 * 1000;
  if (cst2.includes("gün")) sures = cst1 * 24 * 60 * 60 * 1000;

  let zaman = Date.now();

  let sure;
  let data = ms(sures);
  let s = data.seconds;
  let m = data.minutes;
  let h = data.hours;
  let d = data.days;
  if (s) {
    sure = `${s} Saniye`;
  }
  if (m) {
    sure = `${m} Dakika`;
  }
  if (h) {
    sure = `${h} Saat`;
  }
  if (d) {
    sure = `${d} Gün`;
  }

  let cse = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(csw)
    .setTimestamp()
  .setFooter(cstss+" Winners")
  .setDescription(`Katılmak için 🎉 tepkisine tıkla!
Süre: ${sure}
Başlatan: ${message.author}`);
  csc.send(cse).then(cs => {
    cs.react("🎉");

    db.set(`cekilis.${message.guild.id}_${csc.id}`, {
      kanalid: csc.id,
      mesajid: cs.id,
      hosted: message.author.id,
      sure: sures,
      zaman: zaman,
      toplam: cstss,
      odul: csw
    });
  });
};
module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "çekiliş"
};