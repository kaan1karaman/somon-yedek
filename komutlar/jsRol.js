const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();
const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODMyMDk2MDU4MzIzNzYzMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTc3MDM3NDc3fQ.xO7B34C2fp_nTPagAW-ogtVFN6Nre-XCJ8XPrShbCC4', client) 
exports.run = async (bot, message, args) => {
  message.delete(5000)
  if(message.channel.id !== "653115810948055040") return message.channel.send("<a:carpi:657578582700326932> | Bu komutu lütfen <#653115810948055040> kanalında kullanınız.")
  .then(() => message.delete(6500))
  dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
        const karaliste = db.has(`bl_${message.author.id}`);
        if(karaliste == true) return message.channel.send("Karalistedesiniz ve komut kullanamazsınız!");
        let js = message.guild.roles.find(`name`, `JS`)
        message.member.addRole(js)
        if(message.member.roles.has("653601791262457857")) {
          message.channel.send("Javascript+ rolün alındı! Almak için tekrar `!!js+` yazmalısın!")
          message.member.removeRole("653601791262457857")
        }
      } else {
        message.channel.send("Bu komutu kullanabilmek için 12 saatte bir https://discordbots.org/bot/638320960583237632/vote sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyin.")
      }
  })

}
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["jsrol", "js-rol"],
  permLevel: 0
};
exports.help = {
  name: 'js',
  description: 's',
  usage: 's'
};