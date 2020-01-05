const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
var abul = message.guild.channels.find(`id`, `654780746497654784`)

var oneri = args.join(" ").slice(0)
if (!oneri) {
	message.channel.send("Lütfen sorunuzu giriniz.")
} else {
	const embed = new Discord.RichEmbed()
	.setTitle("Soru")
	.addField("Soran Kullanıcı\n", `${message.author.tag}`)
	.addField(`Hatalı Komut\n`, oneri)
  .setColor("BLUE")
  abul.send(embed)
}
    
    
    
  



}; 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["soru-sor", "ask", "asksmth", "soru", "sor"],
 permLevel: 0
}
exports.help = {
 name: 'sorusor',
 description: 's',
 usage: 's'
};
