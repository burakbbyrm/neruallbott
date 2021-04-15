const Discord = require('discord.js');
const ayarlar = require("./ayarlar.json");



const cortexbot = new Discord.ShardingManager('./index.js', {
    totalShards: "auto", // shard sayısı ya da auto yazılabilir
    token: "ODEzMTQ0ODQxODI3NTE2NDI2.YDLCJQ.k3gL7QbQohFTgS1IvSfGeUj5Njo" // token
});

cortexbot.spawn(); 
// www.cortex.red
cortexbot.on('launch', shard => {
  console.log(`${shard.id} IDli shard başarıyla başlatıldı.`)
});
// www.cortex.red
setTimeout(() => {
    console.log("Cortex: Yeniden başlatılıyor.")
    cortexbot.broadcastEval("process.exit()");
}, 21600000);