const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  let link = args[0];
  if(!link) message.channel.send("Lütfen bir link giriniz.")
  let linkk = ["discord.app", "discord.gg", "invite","discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az"]
  if(!linkk.some(content => message.content.includes(content))) {
    message.channel.send("Bu bir bağlantı değil!")
  } else {
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor("Link kısaltıldı.")
    .addField(`Kısaltılan Link:`, `[Tıkla!](https://tr.link/api?api=be5d6dedcbd099c3b9f6e77348d1a00db8f22e92&url=${link}&alias=&format=text&ct=2)`)
    .setFooter("link.tr | -somon")
    .setColor("#00fff7")
    message.channel.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'trlink',
  description: '',
  usage: ''
};