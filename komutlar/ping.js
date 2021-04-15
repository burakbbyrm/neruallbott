const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
var db = require("quick.db");

exports.run = function(client, message, embed, params) {


    message.channel.send(`Ping: ${client.ping}`);

};   

   

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['p', 'ms'],
  permLevel: 0 
};

exports.help = {
  name: 'ping', 
  description: 'Botun pingini gösterir',
  usage: 'ping'
};