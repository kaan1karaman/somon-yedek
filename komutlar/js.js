const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
  if(message.member.roles.array().filter(r => r.name === "Kod paylaşım ekibi")[0]) {
    var parent = message.guild.channels.get('653592787383746580')
    var isim = args.slice(0).join(' ')
    if(message.author.id !== message.guild.ownerID) {
      if(!isim) return message.reply("bir kanal ismi girmelisin.")
    } else {
      
    }
    var regex = / /gi 
    isim.replace(regex, isim)
    message.guild.createChannel(`📁-${isim}`, `text`).then(channel => {
      channel.setParent(message.guild.channels.find(channel => channel.id === "653592787383746580"))
      const embed = new Discord.RichEmbed()
      .setAuthor("Yeni oda açıldı!")
      .addField("Yeni oda:", `<#${channel.id}>`)
      .setColor("#2403fc")
      .setFooter("somon")
      message.channel.send(embed)
    })
  } else {
    if(message.author.id === message.guild.ownerID) {
      var parent = message.guild.channels.get('653592787383746580')
      var isim = args.slice(0).join(' ')
      if(!isim) return message.reply("bir kanal ismi girmelisin.")
      var regex = / /gi 
      isim.replace(regex, isim)
      message.guild.createChannel(`📁-${isim}`, `text`).then(channel => {
        channel.setParent(message.guild.channels.find(channel => channel.id === "653592787383746580"))
        const embed = new Discord.RichEmbed()
        .setAuthor("Yeni oda açıldı!")
        .addField("Yeni oda:", `<#${channel.id}>`)
        .setColor("#2403fc")
        .setFooter("-somon")
        message.channel.send(embed)
      })
    } else {
      
    }
    message.channel.send("KPE rolünüz yok.")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["jsbir", "js"],
  permLevel: 0
};
exports.help = {
  name: 'js1',
  description: 's',
  usage: 's'
};