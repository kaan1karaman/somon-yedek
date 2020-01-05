const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {

  
  if (message.member.roles.array().filter(r => r.id === "653601791262457857")[0]) {
    
    
var abul = message.guild.channels.find(`id`, `654380293393743890`)

var oneri = args.join(" ").slice(0)
if (!oneri) {
	message.channel.send("Hatalı kanalı etiketleyiniz ve hatayı giriniz.")
} else {
	const embed = new Discord.RichEmbed()
	.setTitle("Hatalı Komut")
	.addField("Bildiren Kullanıcı", `${message.author.tag}`)
	.addField(`Hatalı Komut`, oneri)
  .setColor("RED")
  abul.send(embed)
}
    
    
    
  } else {
  message.channel.send("Bu komutu kullanabilmek için JS rolüne sahip olmalısın.")
}
  



}; 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["hatalıkomut", "hatalı-komut"],
 permLevel: 0
}
exports.help = {
 name: 'kod-bug',
 description: 's',
 usage: 's'
};
