const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
 
var kanal = message.guild.channels.get(args.join(' ')) || message.mentions.users.first()
if (!kanal) {
	message.channel.send("Lütfen bir kanal etiketleyiniz.")
} else {
	db.set(`onk_${message.guild.id}`, kanal.id)
	message.channel.send(`Önerilerin gönderileceği kanal ${kanal} olarak ayarlandı.`)
} 
  if (args[0] === "sıfırla") {
	db.delete(`onk_${message.guild.id}`)
	message.channel.send("Önerilerin gönderileceği kanal sıfırlandı.")
}


 } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 4
}
exports.help = {
 name: 'istek-ayarla',
 description: 's',
 usage: 's'
};
