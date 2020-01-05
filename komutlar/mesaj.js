const Discord = require('discord.js');
const debe = require('quick.db');
exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.ownerID) return;
	let usser = message.mentions.users.first();
		if(!usser)
		{
			return;
			message.channel.send("Lütfen bir kullanıcı giriniz.");
		}
	let mesaj = args.splice(1, args.length).join(" ");
		if(!mesaj)
		{
			return;
			message.channel.send("Atacağım mesajı giriniz.");
		}
  message.delete()
	return usser.send(mesaj)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["öm", "pm", "mesaj", "mesajat", "mesaj-at"],
  permLevel: 0
};
exports.help = {
  name: 'dm',
  description: 's',
  usage: 's'
};