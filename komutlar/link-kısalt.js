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
    .addField(`Kısaltılan Link:`, `[Tıkla!](https://www.pnd.tl/st?api=4d6f138169608d49756e7e27c7b91f2c40ea5c14&url=${link})`)
    .setFooter("PND.TL | -somon")
    .setColor("#e6ff08")
    message.channel.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kısalt","link-kısalt", "pndtl", "pnd-tl"],
  permLevel: 4
};
exports.help = {
  name: 'linkkısalt',
  description: '',
  usage: ''
};