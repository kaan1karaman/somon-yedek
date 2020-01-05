const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
  message.react("650588738698870784")
  var isim = args.slice(0).join(' ')
  var regex = / /gi 
  isim.replace(regex, isim)
  message.guild.createChannel(`✲-${isim}`, `text`).then(channel => channel.setParent(message.guild.channels.find(channel => channel.id === "654721895173849103")));
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'hatalar',
  description: 's',
  usage: 's'
};