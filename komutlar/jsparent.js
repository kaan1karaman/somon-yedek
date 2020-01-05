const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
  var pr = args[0]
    if(!pr) return message.channel.send("Bir kategori ID giriniz.")
  var parent = message.guild.channels.find(r => r.id === pr)
    if(!parent) return message.channel.send("Düzgün bir kategori ID'si giriniz.")
  db.set(`parent_${message.guild.id}`, parent)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["jscategory", "js-category", "jsparent"],
  permLevel: 4
};
exports.help = {
  name: 'js-parent',
  description: 's',
  usage: 's'
};