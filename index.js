if (process.version.slice(1).split(".")[0] < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");

const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const {RichEmbed} = require('discord.js');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const chalk = require('chalk');
const fs = require('fs');
const { stripIndents } = require('common-tags');
const moment = require('moment');


const db = require('quick.db');
const jimp = require('jimp');
const Jimp = require('jimp')
const snekfetch = require('snekfetch');


let komutum = JSON.parse(fs.readFileSync("./komutlar.json", "utf8"));

client.cmdd = komutum


require("./modüller/fonksiyonlar.js")(client);
require('./util/eventLoader')(client);
client.config = require("./config.js");


client.ayarlar = {
        "oynuyor": `Language System #help`,
        "official_sahip": "754701327120203877",
        "sahip": "813136280035524659",
        "isim": "NeruaL",
        "webpanel": "https://nerualbot.cf/",
        "versiyon": "0.1",
        "prefix": "#",
        "renk":  "GREEN",
        "version":  "versiyon",
		"token": "ODEzMTQ0ODQxODI3NTE2NDI2.YDLCJQ.IelHIBqVKXPe5tCWBFB-Txtd1AY"
};



client.avatarURL = `bot avatar url`
const ayarlar = client.ayarlar;



//var prefix = ayarlar.prefix;


const log = message => {
  console.log(`${chalk.yellow(`»`)} ${message}`);
};



                         
 
  client.ayar = db;
   







//////////////////////////////////////////////////////////////////////////////////////////
client.on("ready", async () => {
  
  client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
  
  require("./modüller/panel.js")(client); 
  
  console.log(`» ${chalk.green(client.user.username)}${chalk.red(",")} ${chalk.blue(client.guilds.size)} ${chalk.yellow("Sunucu'ya")} ${chalk.red("ve")} ${chalk.blue(client.users.size.toLocaleString())} ${chalk.yellow("Kullanıcı'ya")} ${chalk.red("hizmet veriyor.")}`)
  client.user.setStatus("online");
 client.user.setActivity(client.ayarlar.oynuyor, { type: 'WATCHING' });
  
})
  //////////////////////////////////////////////////////////////////////////////////////////
  
  





//////////////////////////////////////////////////////////////////////////////////////////
const invites = {};


const wait = require('util').promisify(setTimeout);

client.on('ready', () => {

  wait(1000);


  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  try{
  if (db.has(`dKanal_${member.guild.id}`) === true) {
  member.guild.fetchInvites().then(guildInvites => {
   if (member.user.bot) return
    const ei = invites[member.guild.id];
    
    invites[member.guild.id] = guildInvites;
   
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    
    const inviter = client.users.get(invite.inviter.id);
   
    const kanal = member.guild.channels.get(db.fetch(`dKanal_${member.guild.id}`));
 
    kanal.send(`\`${member.user.tag}\` adlı kullanıcı \`${inviter.tag}\` adlı kullanıcının **${invite.code}** linkine sahip daveti ile sunucuya katıldı!`);
  

   
  });
  } else {
    return
  }
  } catch(err) {
    return
  }
});



client.on("message", async msg => {
  const db = require('quick.db');
  
  if (msg.channel.type === "dm") return;
  if(msg.author.bot) return;  
  
  if (msg.content.length > 1) {
    
    db.add(`puancik_${msg.author.id + msg.guild.id}`, 1)//mesaj yazınca xp veriyor
    db.add(`xpsira_${msg.author.id + msg.guild.id}`, 1)//doğru bir sıralama sistemi için var

};

  if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 150) {//150 xp de 1 seviye veriyor
    
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)//seviye verildi
    

    
    db.delete(`puancik_${msg.author.id + msg.guild.id}`)//xp silindi
    
  };
 
  if (db.has(`roll_${msg.guild.id}`) === true) {//rol 
  if (db.has(`rollss_${msg.guild.id}`) === true) {//rol seviye
    
 var r = db.fetch(`roll_${msg.guild.id}`)//rolü bul
 var s = db.fetch(`rollss_${msg.guild.id}`)//seviyeyi bul
  
  if (db.fetch(`seviye_${msg.author.id + msg.guild.id}`) == s) {
    if (msg.member.roles.has(msg.guild.roles.get(r).id) === false) {
    msg.channel.send(`**<@${msg.author.id}> başarıyla ${db.fetch(`seviye_${msg.author.id + msg.guild.id}`) - 1 || 0} seviyeyi geçtin!**`)
    msg.member.addRole(msg.guild.roles.get(r).id)
    }
  };

}};
  
});
//////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////
client.on('guildCreate', async guild => {
   var konum = ''
        if(guild.region === "russia") {
            var konum = '_Rusya_ :flag_ru:'
        }
        if(guild.region === "us-west") {
            var konum = '_Batı Amerika_ :flag_us: '
        }
        if(guild.region === "us-south") {
            var konum = '_Güney Amerika_ :flag_us: '
        }
        if(guild.region === "us-east") {
            var konum = '_Doğu Amerika_ :flag_us: '
        }
        if(guild.region === "us-central") {
            var konum = '_Amerika_ :flag_us: '
        }
        if(guild.region === "brazil") {
            var konum = '_Brezilya_ :flag_br:'
        }
        if(guild.region === "singapore") {
            var konum = '_Singapur_ :flag_sg:'
        }
        if(guild.region === "sydney") {
            var konum = '_Sidney_ :flag_sh:'
        }
        if(guild.region === "eu-west") {
            var konum = '_Batı Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-south") {
            var konum = '_Güney Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-east") {
            var konum = '_Doğu Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-central") {
            var konum = '_Avrupa_ :flag_eu:'
        }
        if(guild.region === "hongkong") {
            var konum = '_Hong Kong_ :flag_hk: '
        }
        if(guild.region === "japan") {
            var konum = '_Japonya_ :flag_jp:'
        }
        var tarih = ''
        if(moment(guild.createdAt).format('MM') === '01') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ocak ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '02') {
            var tarih = `${moment(guild.createdAt).format('DD')} Şubat ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '03') {
            var tarih = `${moment(guild.createdAt).format('DD')} Mart ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '04') {
            var tarih = `${moment(guild.createdAt).format('DD')} Nisan ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '05') {
            var tarih = `${moment(guild.createdAt).format('DD')} Mayıs ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '06') {
            var tarih = `${moment(guild.createdAt).format('DD')} Haziran ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '07') {
            var tarih = `${moment(guild.createdAt).format('DD')} Temmuz ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '08') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ağustos ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '09') {
            var tarih = `${moment(guild.createdAt).format('DD')} Eylül ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '10') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ekim ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '11') {
            var tarih = `${moment(guild.createdAt).format('DD')} Kasım ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '12') {
            var tarih = `${moment(guild.createdAt).format('DD')} Aralık ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
  
       
        var guildhook = new Discord.WebhookClient("688687499429806110", "oZMhtds2MBc25_4AiG0tyqu3PCAkngKO_h0ex30UAPuNRGoYaVaNbrmx9z4zwOG6eV6m")
        //https://discordapp.com/api/webhooks/688687499429806110/oZMhtds2MBc25_4AiG0tyqu3PCAkngKO_h0ex30UAPuNRGoYaVaNbrmx9z4zwOG6eV6m
        
        const server = new RichEmbed()
  .setColor('GREEN')
  .setThumbnail(guild.iconURL || guild.defaultİconURL)
  .setTitle(`${guild.name} Adlı Sunucuya Eklendim!`, guild.iconURL || guild.defaultİconURL)
  .setDescription(`Toplam **${client.guilds.size}** sunucudayım!`)
  .addField(`» Sunucu Bilgileri:`, stripIndents`
   Sunucu Adı: _${guild.name}_
   Sunucu Kimliği/ID: _${guild.id}_
   Sunucunun Kurulduğu Tarih: _${tarih}_
   Sunucunun Konumu: ${konum}
   Sunucu Sahibi: _${guild.owner.user.username}#${guild.owner.user.discriminator}_
   Sunucu Sahibi Kimliği/ID: _${guild.owner.user.id}_
   Sunucudaki Toplam Kullanıcı Sayısı: _${guild.members.size}_
   Sunucudaki İnsan Sayısı: _${guild.members.filter(m => !m.user.bot).size}_
   Sunucudaki Bot Sayısı: _${guild.members.filter(m => m.user.bot).size}_
  `)
  .setFooter(`${client.user.username} | Sunucu İzleyici`, client.user.avatarURL)
  guildhook.send(server);
})

client.on("guildDelete", async guild => {
  var konum = ''
        if(guild.region === "russia") {
            var konum = '_Rusya_ :flag_ru:'
        }
        if(guild.region === "us-west") {
            var konum = '_Batı Amerika_ :flag_us: '
        }
        if(guild.region === "us-south") {
            var konum = '_Güney Amerika_ :flag_us: '
        }
        if(guild.region === "us-east") {
            var konum = '_Doğu Amerika_ :flag_us: '
        }
        if(guild.region === "us-central") {
            var konum = '_Amerika_ :flag_us: '
        }
        if(guild.region === "brazil") {
            var konum = '_Brezilya_ :flag_br:'
        }
        if(guild.region === "singapore") {
            var konum = '_Singapur_ :flag_sg:'
        }
        if(guild.region === "sydney") {
            var konum = '_Sidney_ :flag_sh:'
        }
        if(guild.region === "eu-west") {
            var konum = '_Batı Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-south") {
            var konum = '_Güney Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-east") {
            var konum = '_Doğu Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-central") {
            var konum = '_Avrupa_ :flag_eu:'
        }
        if(guild.region === "hongkong") {
            var konum = '_Hong Kong_ :flag_hk: '
        }
        if(guild.region === "japan") {
            var konum = '_Japonya_ :flag_jp:'
        }
        var tarih = ''
        if(moment(guild.createdAt).format('MM') === '01') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ocak ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '02') {
            var tarih = `${moment(guild.createdAt).format('DD')} Şubat ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '03') {
            var tarih = `${moment(guild.createdAt).format('DD')} Mart ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '04') {
            var tarih = `${moment(guild.createdAt).format('DD')} Nisan ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '05') {
            var tarih = `${moment(guild.createdAt).format('DD')} Mayıs ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '06') {
            var tarih = `${moment(guild.createdAt).format('DD')} Haziran ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '07') {
            var tarih = `${moment(guild.createdAt).format('DD')} Temmuz ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '08') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ağustos ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '09') {
            var tarih = `${moment(guild.createdAt).format('DD')} Eylül ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '10') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ekim ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '11') {
            var tarih = `${moment(guild.createdAt).format('DD')} Kasım ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '12') {
            var tarih = `${moment(guild.createdAt).format('DD')} Aralık ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
  
        

        var guildhook = new Discord.WebhookClient("688687499429806110", "oZMhtds2MBc25_4AiG0tyqu3PCAkngKO_h0ex30UAPuNRGoYaVaNbrmx9z4zwOG6eV6m")
        //https://discordapp.com/api/webhooks/688687499429806110/oZMhtds2MBc25_4AiG0tyqu3PCAkngKO_h0ex30UAPuNRGoYaVaNbrmx9z4zwOG6eV6m
           const server = new RichEmbed()
  .setColor('RED')
  .setThumbnail(guild.iconURL || guild.defaultİconURL)
  .setTitle(`${guild.name} Adlı Sunucudan Atıldım!`, guild.iconURL || guild.defaultİconURL)
  .setDescription(`Toplam **${client.guilds.size}** sunucudayım!`)
  .addField(`» Sunucu Bilgileri:`, stripIndents`
   Sunucu Adı: _${guild.name}_
   Sunucu Kimliği/ID: _${guild.id}_
   Sunucunun Kurulduğu Tarih: _${tarih}_
   Sunucunun Konumu: ${konum}
   Sunucu Sahibi: _${guild.owner.user.username}#${guild.owner.user.discriminator}_
   Sunucu Sahibi Kimliği/ID: _${guild.owner.user.id}_
   Sunucudaki Toplam Kullanıcı Sayısı: _${guild.members.size}_
   Sunucudaki İnsan Sayısı: _${guild.members.filter(m => !m.user.bot).size}_
   Sunucudaki Bot Sayısı: _${guild.members.filter(m => m.user.bot).size}_
  `)
  .setFooter(`${client.user.username} | Sunucu İzleyici`, client.user.avatarURL)
  guildhook.send(server);
})
  //////////////////////////////////////////////////////////////////////////////////////////
client.on("message", m => {
  if (m.channel.id !== "769110671811805205") {
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});
  
  
  
  
 

  //////////////////////////////////////////////////////////////////////////////////////////
  client.on("message", async msg => {
  const prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
  //const args = msg.content.slice.split(' ');
  const args = msg.content.trim().split(/ +/g);
  const fAK = await  db.fetch(`filtreAK_${msg.guild.id}`);
  let mesaj = args.slice(1).join(' ');
  const filtre = await db.fetch(`filtre_${msg.guild.id}`);
  
 
  if(fAK == 'açık') {
    
    
    
            
      const fltr = filtre
   if (fltr.some(word => msg.content.includes(word))) {
  if (!msg.member.hasPermission("ADMINISTRATOR")) {
    msg.delete()
     
   var k = new Discord.RichEmbed()
        .setColor("BLACK")
        .setAuthor("Filtre Sistemi")
        .setDescription(`Bu sunucuda yasaklanmış bir kelimeyi kullandınız, bu yüzden mesajınızı sildim.`)
        msg.channel.send(k).then(message => message.delete(5000));
     
  return;
  }
  } }
    
  
  
   if (!msg.guild) return;

  if (msg.author.bot) return;
  

  
  if (!msg.guild) return;
 
    if (db.has(`küfürE_${msg.guild.id}`) === true) {
    const kufur = new RegExp(/(göt|amk|aq|orospu|oruspu|oç|oc|sik|fuck|yarrak|piç|amq|amcık|çocu|sex|seks|amına|sg|siktir git)/)
  if (kufur.test(msg.content)==true) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete(1)
    }
}
    }

     
      if (db.has(`linkE_${msg.guild.id}`) === true) {
        const reklam = new RegExp(/(com|.com|www|dicord.gg|.tk|.pw|https:|http:|.info|.cf|gg|.net|.me|www.|WWW.|.COM|.NET|.TK|DİSCORD.GG|.PW)/)
      if (reklam.test(msg.content)==true) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          msg.delete()
        }
    }
        }
})

client.on("messageUpdate", async (msg) => {
  
  const prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
  //const args = msg.content.slice.split(' ');
  const args = msg.content.trim().split(/ +/g);
  const fAK = await  db.fetch(`filtreAK_${msg.guild.id}`);
  let mesaj = args.slice(1).join(' ');
  const filtre = await db.fetch(`filtre_${msg.guild.id}`);
  
  
  if(fAK == 'açık') {
    
    
    
            
      const fltr = filtre
   if (fltr.some(word => msg.content.includes(word))) {
  if (!msg.member.hasPermission("ADMINISTRATOR")) {
    msg.delete()
     
   var k = new Discord.RichEmbed()
        .setColor("BLACK")
        .setAuthor("Filtre Sistemi")
        .setDescription(`Bu sunucuda yasaklanmış bir kelimeyi kullandınız, bu yüzden mesajınızı sildim.`)
        msg.channel.send(k).then(message => message.delete(5000));
     
  return;
  }
  } }

  
  if (!msg.guild) return;
  
    if (db.has(`küfürE_${msg.guild.id}`) === true) {
    const kufur = new RegExp(/(göt|amk|aq|orospu|oruspu|oç|oc|sik|fuck|yarrak|piç|amq|amcık|çocu|sex|seks|amına|sg|siktir git)/)
  if (kufur.test(msg.content)==true) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
        var k = new Discord.RichEmbed()
        .setColor("BLACK")
        .setAuthor("Küfür Engeli!")
        .setDescription(`Bu sunucuda küfürler **${client.user.username}** tarafından engellenmektedir! Küfür etmene izin vermeyeceğim!`)
        msg.channel.send(k).then(message => message.delete(5000));
    }
}
    }

      
      if (db.has(`linkE_${msg.guild.id}`) === true) {
        const reklam = new RegExp(/(com|.com|www|dicord.gg|.tk|.pw|https:|http:|.info|.cf|gg|.net|.me|www.|WWW.|.COM|.NET|.TK|DİSCORD.GG|.PW)/)
      if (reklam.test(msg.content)==true) {
       if (!msg.member.hasPermission("ADMINISTRATOR")) {
          msg.delete()
           msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
            var ke = new Discord.RichEmbed()
        .setColor("BLACK")
            .setAuthor("Link Engeli!")
            .setDescription(`Bu sunucuda linkler **${client.user.username}** tarafından engellenmektedir! Reklam yapmana izin vermeyeceğim!`)
            msg.channel.send(ke).then(message => message.delete(5000));
       }
    }
        }

  
});
//////////////////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  
  if (!message.guild) return;
  
    if(db.has(`sayac_${message.guild.id}`) === true) {
        if(db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.size) {
            message.channel.send(`Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`)
            db.delete(`sayac_${message.guild.id}`)
        }
    }
})
//////////////////////////////////////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////////////////////////
client.on("guildMemberRemove", async member => {
    if (db.has(`sayac_${member.guild.id}`) === false) return
    if (db.has(`sKanal_${member.guild.id}`) === false) return
    const channel = db.fetch(`sKanal_${member.guild.id}`)
    member.guild.channels.get(channel).send(`**${member.user.tag}** Sunucudan ayrıldı! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.members.size}\` üye kaldı!`)
})


//let ot = JSON.parse(fs.readFileSync("./jsonlar/otoR.json", "utf8"));


client.on("guildMemberRemove", async member => {
moment.locale("tr")
var maze = new Discord.RichEmbed()
.setColor("ff0000")
.setTimestamp()
.setTitle(":inbox_tray: Sunucuya yeni bir üye katıldı!")
.setThumbnail(member.user.avatarURL)
.setDescription("Hoşgeldin "+ member +" sunucuya katıldı! "+ member.guild.memberCount+" kişiye ulaştık.")
.addField(`:id: Üye ID:`, `${member.id}`, true)
.addField(`:octagonal_sign: Üye Adı`, `${member}`, true)
.addField(":timer: Hesabın Oluşturulma Tarihi", moment(member.user.createdAt).format("`DD MMMM YYYY, dddd (hh:mm)`"))

  if (!member.guild) return;
  
  let prefix = await db.fetch(`prefix_${member.guild.id}`) || client.ayarlar.prefix;
  
  if(db.has(`gc_${member.guild.id}`) === false) return;
  
  const hgK = await db.fetch(`gc_${member.guild.id}`)
  if (!hgK) return;
  
  const giris = db.fetch(`girisM_${member.guild.id}`)
  
    member.guild.channels.get(hgK).send(db.has(`girisM_${member.guild.id}`) ? giris.replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace("{alt}", `\n`).replace("{alt}", `\n`).replace("{alt}", `\n`).replace("{alt}", `\n`).replace("{alt}", `\n`).replace('{hesaptarihi}', moment(member.user.createdAt).format("`DD MMMM YYYY, dddd (hh:mm)`")).replace('{hesaptarihi}', moment(member.user.createdAt).format("`DD MMMM YYYY, dddd (hh:mm)`")).replace('{hesaptarihi}', moment(member.user.createdAt).format("`DD MMMM YYYY, dddd (hh:mm)`")).replace('{hesaptarihi}', moment(member.user.createdAt).format("`DD MMMM YYYY, dddd (hh:mm)`")).replace('{hesaptarihi}', moment(member.user.createdAt).format("`DD MMMM YYYY, dddd (hh:mm)`")).replace('{hesaptarihi}', moment(member.user.createdAt).format("`DD MMMM YYYY, dddd (hh:mm)`")).replace("{user}", `**${member.user.username}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`) : `<@${member.user.id}> Katıldı! **${client.ayarlar.webpanel}** adresinden veya (\`giriş-mesaj-ayarla\` komutu ile mesajı değiştirilebilir.)`);
});

client.on("guildMemberAdd", async member => {
  
  if (!member.guild) return;
  
  let prefix = await db.fetch(`prefix_${member.guild.id}`) || client.ayarlar.prefix;
  
  if(db.has(`gc_${member.guild.id}`) === false) return;
  
   const hgK = await db.fetch(`gc_${member.guild.id}`)
  if (!hgK) return;
  
  const cikis = db.fetch(`cikisM_${member.guild.id}`)
  
  member.guild.channels.get(hgK).send(db.has(`cikisM_${member.guild.id}`) ? cikis.replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı-etiket}', `<@${member.user.id}>`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace('{kullanıcı}', `${member.user.tag}`).replace("{alt}", `\n`).replace("{alt}", `\n`).replace("{alt}", `\n`).replace("{alt}", `\n`).replace("{alt}", `\n`).replace('{hesaptarihi}', moment(member.user.createdAt).format("`DD MMMM YYYY, dddd (hh:mm)`")).replace('{hesaptarihi}', moment(member.user.createdAt).format("`DD MMMM YYYY, dddd (hh:mm)`")).replace('{hesaptarihi}', moment(member.user.createdAt).format("`DD MMMM YYYY, dddd (hh:mm)`")).replace('{hesaptarihi}', moment(member.user.createdAt).format("`DD MMMM YYYY, dddd (hh:mm)`")).replace('{hesaptarihi}', moment(member.user.createdAt).format("`DD MMMM YYYY, dddd (hh:mm)`")).replace('{hesaptarihi}', moment(member.user.createdAt).format("`DD MMMM YYYY, dddd (hh:mm)`")).replace("{user}", `**${member.user.username}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`) : `**${member.user.username}** Ayrıldı! **${client.ayarlar.webpanel}** adresinden veya (\`çıkış-mesaj-ayarla\` komutu ile mesaj değiştirilebilir.)`);
});
//////////////////////////////////////////////////////////////////////////////////////////


client.on("message",async  message => {

  if (!message.guild) return;
  
let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

  if(message.content.startsWith(prefix)) {
        let komutum = client.cmdd
        if(komutum[message.guild.id]) {
            for (var i = 0; i < Object.keys(komutum[message.guild.id]).length; i++) {
                if(message.content.slice(prefix.length) === Object.keys(komutum[message.guild.id][i])[0]) {
                   
                    message.channel.send(komutum[message.guild.id][i][Object.keys(komutum[message.guild.id][i])])
                  
                    return
                }
            }
        }
    }
});


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
      const prefixMention = new RegExp(`^<@!?${client.user.id}>`);
    if (message.channel.type === "dm") return;

  if (message.author.bot) return;

  var user = message.mentions.users.first() || message.author;
  if (!message.guild) user = message.author;

  var user = message.mentions.users.first() || message.author;
  if (!message.guild) user = message.author;



     let i = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

    let prefix;
    if (i) {
        prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] + " " : i;
    } else {
        prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] + " " : `${message.guild.commandPrefix}`;
    }

    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
//////////////////////////////////////////////////////////////////////////////////////////

  
  
  
  
//////////////////////////////////////////////////////////////////////////////////////////
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.english = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  //log(`${chalk.red(files.length)} ${chalk.green("komut yüklenecek.")}`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    //log(`${chalk.green("Yüklenen komut:")} ${chalk.blue(props.help.name)}.`);
    client.english.set(props.help.enname, props)
  });
});


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

  


client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
     
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
//////////////////////////////////////////////////////////////////////////////////////////
})

client.on("message", message => {
  if (message.channel.id !== "741607661912588310") return;
let mesaj = message.content
let kanal = client.channels.get('741694785672445952')
message.delete(0)
kanal.send(mesaj)
kanal.send(`${message.author}`)
})

client.on('guildMemberAdd', member => {
     let kanal = db.fetch(`güvenlik.${member.guild.id}`)
     if(!kanal) return;

       let aylar = {
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

  let bitiş = member.user.createdAt
      let günü = moment(new Date(bitiş).toISOString()).format('DD')
      let ayı = moment(new Date(bitiş).toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık").replace("13","CodAre")//codare
     let yılı =  moment(new Date(bitiş).toISOString()).format('YYYY')
     let saati = moment(new Date(bitiş).toISOString()).format('HH:mm')

let günay = `${günü} ${ayı} ${yılı} ${saati}`  

      let süre = member.user.createdAt
      let gün = moment(new Date(süre).toISOString()).format('DD')
      let hafta = moment(new Date(süre).toISOString()).format('WW')
      let ay = moment(new Date(süre).toISOString()).format('MM')
      let ayy = moment(new Date(süre).toISOString()).format('MM')
      let yıl =  moment(new Date(süre).toISOString()).format('YYYY')
     let yıl2 = moment(new Date().toISOString()).format('YYYY')

     let netyıl = yıl2 - yıl

     let created = ` ${netyıl} yıl  ${ay} ay ${hafta} hafta ${gün} gün önce`

     let kontrol;
     if(süre < 1296000000) kontrol = 'Bu hesap şüpheli!'
     if(süre > 1296000000) kontrol = 'Bu hesap güvenli!'

     let codare = new Discord.MessageEmbed()
     .setColor('GREEN')
     .setTitle(`${member.user.username} Katıldı`)
     .setDescription('<@'+member.id+'> Bilgileri: \n\n  Hesap oluşturulma tarihi **[' + created + ']** (`' + günay + '`) \n\n Hesap durumu: **' + kontrol + '**')//codare
     .setTimestamp()
     client.channels.cache.get(kanal).send(codare)
})

client.login('ODEzMTQ0ODQxODI3NTE2NDI2.YDLCJQ.ku7AWHrTfh9qTIeEpx9XoPxJr7Y')





client.on("message", async message => {
  let prefix = ayarlar.prefix;

  var id = message.author.id;
  var gid = message.guild.id;

  let hm = await db.fetch(`seviyeacik_${gid}`);
  let kanal = await db.fetch(`svlog_${gid}`);
  let xps = await db.fetch(`verilecekxp_${gid}`);
  let seviyerol = await db.fetch(`svrol_${gid}`);
  let rollvl = await db.fetch(`rollevel_${gid}`);

  if (!hm) return;
  if (message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);

  if (!lvl) {
    if (xps) {
      db.set(`xp_${id}_${gid}`, xps);
    }
    db.set(`xp_${id}_${gid}`, 4);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);
  } else {
    if (xps) {
      db.add(`xp_${id}_${gid}`, xps);
    }
    db.add(`xp_${id}_${gid}`, 4);

    if (xp > xpToLvl) {
      db.add(`lvl_${id}_${gid}`, 1);
      db.add(
        `xpToLvl_${id}_${gid}`,
        (await db.fetch(`lvl_${id}_${gid}`)) * 100
      );
      if (kanal) {
        client.channels
          .get(kanal.id)
          .send(
            message.member.user.username +
              "** Seviye Atladı! Yeni seviyesi; `" +
              lvl +
              "` Tebrikler! :tada: **"
          );

      }
    }

    if (seviyerol) {
      if (lvl >= rollvl) {
        message.guild.member(message.author.id).addRole(seviyerol);
        if (kanal) {
          client.channels
            .get(kanal.id)
            .send(
              message.member.user.username +
                "** Seviyesi **" +
                rollvl +
                "** e ulaştı ve " +
                seviyerol +
                " Rolünü kazandı! :tada: **"
            );
        }
      }
    }
  }

});
//////////////////////////////////////////////////////////////////////////////////////////

const AntiSpam = require("./spamkorumasi.js");
const cooldown = new Set();

client.on("message", msg => {
  if (client.user.id == msg.author.id) return;
  AntiSpam(client, msg);
  if (cooldown.has(msg.author.id)) {
    return;
  }
})  




client.on("message", async msg => {
  if (db.has(`ddosE_${msg.guild.id}`) === true) {
    if (client.ping > 400) {
      var bölgeler = [
        "singapore",
        "eu-central",
        "india",
        "us-central",
        "london",
        "eu-west",
        "amsterdam",
        "brazil",
        "us-west",
        "hongkong",
        "us-south",
        "southafrica",
        "us-east",
        "sydney",
        "frankfurt",
        "russia"
      ];
      var yeniBölge = bölgeler[Math.floor(Math.random() * bölgeler.length)];
      msg.guild.setRegion(yeniBölge);
      
}}})

client.on("emojiDelete", async (emo, message) => {
  var sistem = await db.fetch(`emojiE_${message.guild.id}`);
  if (emo === null) return;
  else {
    const entry = await emo.guild
      .fetchAuditLogs({ type: "EMOJI_DELETE" })
      .then(audit => audit.entries.first());
    const exec = await emo.guild.members.get(entry.executor.id);
    if (exec.hasPermission("ADMINISTRATOR")) return;
    emo.guild.createEmoji(emo.url, emo.name);
    exec.removeRoles(exec.roles);
    setTimeout(async function() {
      let role = emo.guild.roles.find(r => r.name === "Cezalı");
      if (!role) {
        emo.guild
          .createRole({
            name: "Cezalı",
            color: "GREY",
            position: emo.guild.roles.size - 1,
            permissions: []
          })
          .then(rol => {
            exec.addRole(rol);
          })
          .catch(e => console.error(e));
        setTimeout(async function() {});
      } else {
        exec.addRole(role);
      }
    }, 400);
  }
});

client.on("channelDelete", async (channel) => {
  var sistem = await db.fetch(`kanalE_${channel.guild.id}`);
  if (sistem === null) return;
  else {
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_DELETE" })
      .then(audit => audit.entries.first());
    const exec = await channel.guild.members.get(entry.executor.id);
    if (exec.hasPermission("ADMINISTRATOR")) return;
    exec.removeRoles(exec.roles);
    setTimeout(async function() {
      let role = channel.guild.roles.find(r => r.name === "Cezalı");
      if (!role) {
        channel.guild
          .createRole({
            name: "Cezalı",
            color: "GREY",
            position: channel.guild.roles.size - 1,
            permissions: []
          })
          .then(rol => {
            exec.addRole(rol);
          })
          .catch(e => console.error(e));
        setTimeout(async function() {});
      } else {
        exec.addRole(role);
      }
    }, 400);
  }
});

client.on("guildMemberAdd", async (member) => {
  if (!member.user.bot) return;
if(!member.guild) return ;
  let açık1 = db.has(`rightE_${member.guild.id}`)
if(!açık1) return;
  let log = await member.guild.fetchAuditLogs().then(denetim => denetim.entries.first());
  let botuSokan = log.executor.id;
  if (member.guild.ownerID === botuSokan) return;
  else {
    let botuSokanv2 = await member.guild.members.get(botuSokan);
    
   
      try {
    
          member.ban(
            `Bot koruma sistemi, ${botuSokanv2.user.tag} tarafından ${member.user.tag} botu sokuldu, sistem tarafından yasaklandı.`
          );
   
      } catch (e) {
        console.log(e);
      }
    }
  
});

client.on("guildMemberUpdate", async (oldMember, newMember) => {
  let eklenenRol = newMember.roles.filter(rol => !oldMember.roles.has(rol.id));
  if (eklenenRol.size > 0) {
    if (
      db.has(
        `${eklenenRol.map(rol => rol.guild.id)}.${eklenenRol.map(
          rol => rol.id
        )}`
      ) === false
    ) {
      db.set(
        `${eklenenRol.map(rol => rol.guild.id)}.${eklenenRol.map(
          rol => rol.id
        )}`,
        eklenenRol.map(r => r.members.map(m => m.id))
      );
    } else {
      db.delete(
        `${eklenenRol.map(rol => rol.guild.id)}.${eklenenRol.map(
          rol => rol.id
        )}`
      );
      setTimeout(async function() {
        db.set(
          `${eklenenRol.map(rol => rol.guild.id)}.${eklenenRol.map(
            rol => rol.id
          )}`,
          eklenenRol.map(r => r.members.map(m => m.id))
        );
      }, 150);
    }
  }
});

client.on("roleDelete", async (role) => {
  var sistem = await db.fetch(`rolE_${role.guild.id}`);
  if (sistem === null) return;
  let log = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(kay => kay.entries.first());
  let exec = role.guild.members.get(log.executor.id);
  if (exec.hasPermission("ADMINISTRATOR")) return;
  else {
    let cezalı = role.guild.roles.find(r => r.name === "Cezalı");
    if (!cezalı) {
      try {
        role.guild
          .createRole({
            name: "Cezalı",
            color: "GREY",
            position: role.guild.roles.size - 1,
            permissions: []
          })
          .then(r => {
            exec.removeRoles(exec.roles);
            setTimeout(async function() {
              exec.addRole(r);
            }, 500);
          })
          .catch(e => console.error(e));
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        exec.removeRoles(exec.roles);
        setTimeout(async function() {
          exec.addRole(cezalı);
        });
      } catch (e) {
        console.log(e);
      }
    }
    let members = await db.fetch(`${role.guild.id}.${role.id}`);
    members.forEach(ui => {
      console.log(ui);
    });
  }
});

client.on("guildBanAdd", async (guild, user) => {
  var sistem = await db.fetch(`rightE_${guild.id}`);
  if (sistem === null) return;
  else {
    let log = guild
      .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
      .then(k => k.entries.first());
    let exec = guild.members.get(log.executor.id);
    let banned = guild.members.get(user.id);
    if (exec.hasPermission("ADMINISTRATOR")) return;
    else {
      exec.removeRoles(exec.roles);
      let cezalı = guild.roles.find(r => r.name === "Cezalı");
      if (!cezalı) {
        try {
          guild
            .createRole({
              name: "Cezalı",
              color: "GREY",
              position: guild.roles.size - 1,
              permissions: []
            })
            .then(r => {
              exec.addRole(r);
            })
            .catch(e => console.log(e));
          setTimeout(async function() {
            exec.removeRoles(exec.roles);
          }, 200);
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          exec.addRole(cezalı);
          setTimeout(async function() {
            exec.removeRoles(exec.roles);
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${client.ayarlar.prefix}${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
 
client.on("message", async msg => {
  var sistem = await db.fetch(`ddos`);
  if (sistem === true) {
    if (client.ping > 400) {
      var bölgeler = [
        "singapore",
        "eu-central",
        "india",
        "us-central",
        "london",
        "eu-west",
        "amsterdam",
        "brazil",
        "us-west",
        "hongkong",
        "us-south",
        "southafrica",
        "us-east",
        "sydney",
        "frankfurt",
        "russia"
      ];
      var yeniBölge = bölgeler[Math.floor(Math.random() * bölgeler.length)];
      msg.guild.setRegion(yeniBölge);
          
       
            
          }
        }
      } 

      
    
          )

client.on("emojiDelete", async emo => {
  var sistem = await db.fetch(`emo`);
  if (emo === null) return;
  else {
    const entry = await emo.guild
      .fetchAuditLogs({ type: "EMOJI_DELETE" })
      .then(audit => audit.entries.first());
    const exec = await emo.guild.members.get(entry.executor.id);
    if (exec.hasPermission("ADMINISTRATOR")) return;
    emo.guild.createEmoji(emo.url, emo.name);
    exec.removeRoles(exec.roles);
    setTimeout(async function() {
      let role = emo.guild.roles.find(r => r.name === "Cezalı");
      if (!role) {
        emo.guild
          .createRole({
            name: "Cezalı",
            color: "GREY",
            position: emo.guild.roles.size - 1,
            permissions: []
          })
          .then(rol => {
            exec.addRole(rol);
          })
          .catch(e => console.error(e));
        setTimeout(async function() {});
      } else {
        exec.addRole(role);
      }
    }, 400);
  }
});

client.on("channelDelete", async channel => {
  var sistem = await db.fetch(`kanal`);
  if (sistem === null) return;
  else {
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_DELETE" })
      .then(audit => audit.entries.first());
    const exec = await channel.guild.members.get(entry.executor.id);
    if (exec.hasPermission("ADMINISTRATOR")) return;
    exec.removeRoles(exec.roles);
    setTimeout(async function() {
      let role = channel.guild.roles.find(r => r.name === "Cezalı");
      if (!role) {
        channel.guild
          .createRole({
            name: "Cezalı",
            color: "GREY",
            position: channel.guild.roles.size - 1,
            permissions: []
          })
          .then(rol => {
            exec.addRole(rol);
          })
          .catch(e => console.error(e));
        setTimeout(async function() {});
      } else {
        exec.addRole(role);
      }
    }, 400);
  }
});

client.on("guildMemberAdd", async member => {
  if (!member.user.bot) return;
  var sistem = await db.fetch(`rightE_{msg.guild.id}`);
  if (sistem === true) return;
  let log = await member.guild
    .fetchAuditLogs()
    .then(denetim => denetim.entries.first());
  let botuSokan = log.executor.id;
  if (member.guild.ownerID === botuSokan) return;
  else {
    let botuSokanv2 = await member.guild.members.get(botuSokan);
    let cezalı = member.guild.roles.find(r => r.name === "Cezalı");
    if (!cezalı) {
      try {
        member.guild
          .createRole({
            name: "Cezalı",
            color: "GREY",
            position: member.guild.roles.size - 1,
            permissions: []
          })
          .then(rol => {
            botuSokanv2.removeRoles(botuSokanv2.roles);
            setTimeout(async function() {
              botuSokanv2.addRole(rol);
            }, 500).catch(e => console.error(e));
          });
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        botuSokanv2.removeRoles(botuSokanv2.roles);
        setTimeout(async function() {
          botuSokanv2.addRole(cezalı);
          member.ban(
            `Bot koruma sistemi, ${botuSokanv2.user.tag} tarafından ${member.user.tag} botu sokuldu, sistem tarafından yasaklandı.`
          );
        }, 500);
      } catch (e) {
        console.log(e);
      }
    }
  }
});

client.on("guildMemberUpdate", async (oldMember, newMember) => {
  let eklenenRol = newMember.roles.filter(rol => !oldMember.roles.has(rol.id));
  if (eklenenRol.size > 0) {
    if (
      db.has(
        `${eklenenRol.map(rol => rol.guild.id)}.${eklenenRol.map(
          rol => rol.id
        )}`
      ) === false
    ) {
      db.set(
        `${eklenenRol.map(rol => rol.guild.id)}.${eklenenRol.map(
          rol => rol.id
        )}`,
        eklenenRol.map(r => r.members.map(m => m.id))
      );
    } else {
      db.delete(
        `${eklenenRol.map(rol => rol.guild.id)}.${eklenenRol.map(
          rol => rol.id
        )}`
      );
      setTimeout(async function() {
        db.set(
          `${eklenenRol.map(rol => rol.guild.id)}.${eklenenRol.map(
            rol => rol.id
          )}`,
          eklenenRol.map(r => r.members.map(m => m.id))
        );
      }, 150);
    }
  }
});

client.on("roleDelete", async role => {
  var sistem = await db.fetch(`rol`);
  if (sistem === null) return;
  let log = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(kay => kay.entries.first());
  let exec = role.guild.members.get(log.executor.id);
  if (exec.hasPermission("ADMINISTRATOR")) return;
  else {
    let cezalı = role.guild.roles.find(r => r.name === "Cezalı");
    if (!cezalı) {
      try {
        role.guild
          .createRole({
            name: "Cezalı",
            color: "GREY",
            position: role.guild.roles.size - 1,
            permissions: []
          })
          .then(r => {
            exec.removeRoles(exec.roles);
            setTimeout(async function() {
              exec.addRole(r);
            }, 500);
          })
          .catch(e => console.error(e));
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        exec.removeRoles(exec.roles);
        setTimeout(async function() {
          exec.addRole(cezalı);
        });
      } catch (e) {
        console.log(e);
      }
    }
    let members = await db.fetch(`${role.guild.id}.${role.id}`);
    members.forEach(ui => {
      console.log(ui);
    });
  }
});

client.on("guildBanAdd", async (guild, user) => {
  var sistem = await db.fetch(`rightban`);
  if (sistem === null) return;
  else {
    let log = guild
      .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
      .then(k => k.entries.first());
    let exec = guild.members.get(log.executor.id);
    let banned = guild.members.get(user.id);
    if (exec.hasPermission("ADMINISTRATOR")) return;
    else {
      exec.removeRoles(exec.roles);
      let cezalı = guild.roles.find(r => r.name === "Cezalı");
      if (!cezalı) {
        try {
          guild
            .createRole({
              name: "Cezalı",
              color: "GREY",
              position: guild.roles.size - 1,
              permissions: []
            })
            .then(r => {
              exec.addRole(r);
            })
            .catch(e => console.log(e));
          setTimeout(async function() {
            exec.removeRoles(exec.roles);
          }, 200);
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          exec.addRole(cezalı);
          setTimeout(async function() {
            exec.removeRoles(exec.roles);
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
});


 client.login("ODEzMTQ0ODQxODI3NTE2NDI2.YDLCJQ.ku7AWHrTfh9qTIeEpx9XoPxJr7Y");

client.on("ready", async () => {
  setInterval(async () => {
    client.guilds.map(guild => {
      guild.channels.map(channel => {
        let data = db.get(`cekilis.${guild.id}_${channel.id}`);
        if (data) {
          let time = Date.now() - data.zaman;
          let sure = data.sure;
let kanal = guild.channels.get(data.kanalid);
kanal.fetchMessage(data.mesajid).then(async mesaj => {
              mesaj.edit(new Discord.RichEmbed()
                         .setColor("GREEN")
    .setTitle(data.odul)
    .setTimestamp()
  .setFooter(data.toplam+" Kişi Kazanacak")
  .setDescription(`Katlımak için 🎉 tepkisine tıkla!
Süre: ${moment.duration(sure - time).format(`DD [Gün,] HH [Saat,] mm [Dakika,] ss [Saniye]`)}
Başlatan: <@${data.hosted}>`))
          
            
            })

          if (time >= sure) {

            
            
      
            kanal.fetchMessage(data.mesajid).then(async mesaj => {
                                    let users = mesaj.reactions.get("🎉").users
                       let win = users.array().filter(u => u.id !== mesaj.author.id !== client.user.id);
                          for(let i = 0; i < data.toplam; i += 1){
                       let winner = win[Math.floor(Math.random() * win.length) + 0]
                                              let winner1 = win[Math.floor(Math.random() * win.length) + 1]
                                                                                            
                       
            mesaj.edit(
              new Discord.RichEmbed()
                .setTitle(data.odul+" 🎉")
                .setColor("GREEN")
                .setTimestamp()
              .setDescription(`Başlatan: <@${data.hosted}>
Kazanan: ${winner}`)
            )
            
                if (data.toplam) {          
            kanal.send(`${winner}, ${winner1} **${data.odul}** adlı çekilişi kazandı!`);
            db.delete(`cekilis.${guild.id}_${channel.id}`);
              }}})
          }
        }
      });
    });
  }, 5000);
});

client.on("guildCreate", guild => {
let add = client.channels.get("813752523420467200")
const eklendim = new Discord.RichEmbed()

.setTitle(`Sunucuya Eklendim`)
.setTimestamp()
.setColor("GREEN")
.setThumbnail(guild.iconURL)
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Kurucu`,guild.owner.user.tag)
.addField(`Kurucu ID`,guild.owner.user.id)
.addField(`Üye Sayısı`,guild.memberCount)

add.send(eklendim)

});

client.on("guildDelete", guild => {
let remove = client.channels.get("813752523420467200")
const atildim = new Discord.RichEmbed()

.setTitle(`Sunucudan Atıldım`)
.setTimestamp()
.setColor("RED")
.setThumbnail(guild.iconURL)
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Kurucu`,guild.owner.user.tag)
.addField(`Kurucu ID`,guild.owner.user.id)
.addField(`Üye Sayısı`,guild.memberCount)

remove.send(atildim)

});




client.on("guildBanAdd", async(guild, user) => {
  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())
  let yashinubanlimit = await db.fetch(`banlimit31_${guild.id}`)
  let yashinukullanıcıban = await db.fetch(`banlimitP31_${entry.executor.id}`)
  const log = db.fetch(`korumaLog_${guild.id}`); 
    if(yashinubanlimit) {
      if(entry.executor.id !== guild.owner.user.id) {
        
        await db.add(`banlimitP31_${entry.executor.id}`, 1)
        
        client.channels.get(log).send(`\`${user.id}\` - \`${user.tag}\` kişisi ${entry.executor} tarafından **${entry.reason ? entry.reason : "girilmedi"}** nedeni ile yasaklandı! \n${entry.executor} Banları: ${yashinukullanıcıban}`)
        
        if(yashinukullanıcıban >= yashinubanlimit) {
        
          try {
                guild.kick(entry.executor.id, "Ban Limit")
client.channels.get(log).send(`Sunucundan bir yetkili ban limitine ulaştı ve sunucudan atıldı ! İşte bilgileri => \n\n\`Kullanıcı:\`  ${entry.executor} | ${entry.executor.id} \n\`Discord'a ve Sunucuya Katılım Tarihi:\` \n• **Discord:** ${moment(entry.executor.createdAt).format('DD/MM/YYYY | HH:mm:ss')} • **Sunucu:** ${moment(guild.member(entry.executor).joinedAt).format('DD/MM/YYYY | HH:mm:ss')}`)          } catch(err) { }
          db.delete(`banlimitP31_${entry.executor.id}`)
        }
      }
    }
  
})


//Kanal Limit
client.on("channelDelete", async(channel) => {
  const guild = channel.guild;
  const entry = await guild.fetchAuditLogs({type: 12}).then(audit => audit.entries.first())
  let yashinukanallimit = await db.fetch(`klimit31_${guild.id}`)
  let yashinukullanıcılimit = await db.fetch(`klimitP31_${entry.executor.id}`)
  const log = db.fetch(`korumaLog_${guild.id}`); 
    if(yashinukanallimit) {
      if(entry.executor.id !== guild.owner.user.id) {
        
        await db.add(`klimitP31_${entry.executor.id}`, 1)
        
        client.channels.get(log).send(`\`${channel.name}\` adlı kanal ${entry.executor} tarafından silindi!`)
        
        if(yashinukullanıcılimit >= yashinukanallimit) {
                  try {
            client.channels.get(log).send(`Sunucundan bir yetkili kanal limitine ulaştı ve sunucudan atıldı ! İşte bilgileri => \n\n\`Kullanıcı:\`  ${entry.executor} | ${entry.executor.id} \n\`Discord'a ve Sunucuya Katılım Tarihi:\` \n• **Discord:** ${moment(entry.executor.createdAt).format('DD/MM/YYYY | HH:mm:ss')} • **Sunucu:** ${moment(guild.member(entry.executor).joinedAt).format('DD/MM/YYYY | HH:mm:ss')}`)
            guild.kick(entry.executor.id, "Kanal Limit")
            
          } catch(err) { }
          db.delete(`klimitP31_${entry.executor.id}`)
        }
      }
    }
  
})

//Rol Limit
client.on("roleDelete", async(role) => {
  const guild = role.guild;
  const entry = await guild.fetchAuditLogs({type: 32}).then(audit => audit.entries.first())
  let yashinukanallimit = await db.fetch(`rlimit31_${guild.id}`)
  let yashinukullanıcılimit = await db.fetch(`rlimitP31_${entry.executor.id}`)
  const log = db.fetch(`korumaLog_${guild.id}`); 
    if(yashinukanallimit) {
      if(entry.executor.id !== guild.owner.user.id) {
        
        await db.add(`rlimitP31_${entry.executor.id}`, 1)
        
        client.channels.get(log).send(`\`${role.name}\` adlı rol ${entry.executor} tarafından silindi!`)
        
        if(yashinukullanıcılimit >= yashinukanallimit) {
                  try {
            client.channels.get(log).send(`Sunucundan bir yetkili rol limitine ulaştı ve sunucudan atıldı ! İşte bilgileri => \n\n\`Kullanıcı:\`  ${entry.executor} | ${entry.executor.id} \n\`Discord'a ve Sunucuya Katılım Tarihi:\` \n• **Discord:** ${moment(entry.executor.createdAt).format('DD/MM/YYYY | HH:mm:ss')} • **Sunucu:** ${moment(guild.member(entry.executor).joinedAt).format('DD/MM/YYYY | HH:mm:ss')}`)
            guild.kick(entry.executor.id, "Rol Limit")
            
          } catch(err) { }
          db.delete(`rlimitP31_${entry.executor.id}`)
        }
      }
    }
  
})

client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;  
        if (msg.content.length > 4) {
         if (db.fetch(`capsE_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
				  if (!msg.mentions.channels.first()) {
                 msg.delete(1)
			   }}
       }
     }
   }
  }
});

client.on('message', message => {
	if(!message.guild) return
            if (!message.member.hasPermission("BAN_MEMBERS")) {
				if(!message.guild) return
let kedjik = db.fetch(`sonmesaj.${message.author.id}.${message.guild.id}`)
if(message.content == kedjik){
  let açık = db.fetch(`tkr_${message.guild.id}`)
if(!açık) return;
                  message.delete();
return;
}
  
db.set(`sonmesaj.${message.author.id}.${message.guild.id}`, message.content)
}})
var express = require('express');
var app = express();
app.get("/foo", (req, res, next) => {
  const foo = JSON.parse(req.body.jsonString);
});
process.on("unhandledRejection", (reason, promise) => {
});

process.on('uncaughtException', function(err) { 
     client.guilds.get('813309106098143232').channels.get('813890573651017808').send(err)
}) 

process.on('uncaughtException', function(err) { 
    console.log(err) 
})