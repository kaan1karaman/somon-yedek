const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
  message.react("650588738698870784")
  message.channel.send("Yay, yeni JS+ kanalı oluşturuldu!")
  var isim = args.slice(0).join(' ')
  var regex = / /gi 
  isim.replace(regex, isim)
  let every = message.guild.roles.find(r => r.name === "@everyone")
  message.guild.createChannel(`❇-${isim}`, `text`).then(channel => channel.setParent(message.guild.channels.find(channel => channel.id === "654331001878609920")));
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["jsultra", "jsmega", "jsp"],
  permLevel: 4
};
exports.help = {
  name: 'jsplus',
  description: 's',
  usage: 's'
};