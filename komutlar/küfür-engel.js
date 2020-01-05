const Discord = require('discord.js');
const debe = require('quick.db');
exports.run = async (client, message, args) => {
	if(!message.member.hasPermission("MANAGE_GUILD")) return;
	var ayar = args[0];
		if(!ayar) return message.channel.send("`aç` ya da `kapat` şeklinde bir değer girmelisin!");
	if(ayar == "aç") 
	{
		debe.set(`kEngel_${message.guild.id}`, 'tru');
		message.channel.send("Küfür-engel sistemi başarıyla açık duruma getirildi!");
	} else if(ayar == "kapat") 
	{
		debe.set(`kEngel_${message.guild.id}`, 'fols');
		message.channel.send("Küfür-engel sistemi başarıyla kapalı duruma getirildi!");
	}
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["küfürengel"],
  permLevel: 0
};
exports.help = {
  name: 'küfür-engel',
  description: 's',
  usage: 's'
};
