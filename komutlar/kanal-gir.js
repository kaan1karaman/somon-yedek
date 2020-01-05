const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let role = message.guild.defaultRole
  
var kanal = message.guild.channels.get(args.join(' '))   
if (!kanal) {
  message.channel.send("Lütfen bir kanal bilgisi giriniz.")
} else {
  kanal.join().then(kanal => kanal.overwritePermissions(role, {
    CONNECT: false,
  }))
}
  
  
}
  


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "kanalgir",
  description: "Botun oynadigi oyunu gösterir.",
  usage: "izliyor <izliyor ismi>"
};