
const db = require("quick.db");
  
  const Discord = require("discord.js");
        
var MessageData = [];
module.exports = (client, msg) => {
	 if (db.fetch(`spamE_${msg.guild.id}`)) {
  if (msg.channel.name === undefined){
  }else{
  if (MessageData[msg.author.id] === undefined) {
    MessageData[msg.author.id] = { MesssageNumber: 0, LastMessage: [] };
    setTimeout(() => {
      delete MessageData[msg.author.id];
    }, 4000);
  }
  MessageData[msg.author.id].MesssageNumber += 1;
  MessageData[msg.author.id].LastMessage.push(msg);
    
    
  }  if (MessageData[msg.author.id].MesssageNumber >= 4) {
	  
      var request = require("request");
  request({
    url: `https://discordapp.com/api/v7/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {

				 rate_limit_per_user: 3
    },
    headers: {
      Authorization: `Bot ${client.token}`
    }
  });

    msg.channel.bulkDelete(4).then(stopspam => {
                  msg.channel.send("Güvenlik önlemleri nedeniyle bu kanala slowmode koydum..");
        setTimeout(() => {
          stopspam.delete();
        }, 900);
      });
    var isFine = false;
    MessageData[msg.author.id].LastMessage.forEach(msgg => {
      if (msg.channel.id == msgg.channel.id) {
          if (MessageData[msg.author.id].MesssageNumber >= 8) {
          isFine = true;
        } else {
          isFine = false;
        }
      }
    });
    if (MessageData[msg.author.id].MesssageNumber >= 5) {

        const spambed = new Discord.RichEmbed()
          .setColor("BLUE")
      .setAuthor("", client.user.AvatarURL)
    var request = require("request");
  request({
    url: `https://discordapp.com/api/v7/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
      rate_limit_per_user: 0
    },
    headers: {
      Authorization: `Bot ${client.token}`
    }
  });
    msg.channel.bulkDelete(1)
        msg.channel.send(msg.author.tag + " SPAM nedeniyle susturuldu..");
        msg.channel.overwritePermissions(msg.author.id, {
                SEND_MESSAGES: false
});
      }
    }
  if (MessageData[msg.author.id] >= 3) {
      const spambed = new Discord.RichEmbed()
        .setColor("BLUE") 
      .setAuthor("", client.user.AvatarURL)
      .setDescription(msg.author.tag + " sana spam yapmayı kes yoksa susturulursun demiştim!");
      msg.channel.send();
      msg.channel.overwritePermissions(msg.author.id, {
                SEND_MESSAGES: false
	  
});
    }
  }
		 }