const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.find(r => r.id === "640950362056163365"); //buraya erkek rolünüzün id'sini koyun
  const misafir = message.guild.roles.find(r => r.id === "656520300422365204"); //buraya misafir rolünüzün id'sini koyun.
  const log = message.guild.channels.find(c => c.id === "660740191958597662"); //buraya kayıt log id koyun
  const tag = "戈";
  if(!message.member.roles.array().filter(r => r.name === "Kayıt Sorumlusu")[0]) {
    return message.channel.send("Yeterli yetkiniz bulunmuyor.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    c.addRole(kayıtlı)
    c.removeRole(misafir)
    c.setNickname(`${tag} ${nick} , ${yas}`)
    const embed = new Discord.RichEmbed()
    .setAuthor("Kadın kaydı yapıldı!")
    .addField(`Kaydı yapılan\n`, `${c.user.tag}`)
    .addField(`Kaydı yapan\n`, `${message.author.tag}`)
    .addField(`Yeni isim\n`, `${tag} ${nick} , ${yas}`)
    .setFooter("-codare | kayıt sistemi")
    .setColor("#ff00a6")
    log.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kız"],
  permLevel: 0
};

exports.help = {
  name: "kadın",
  description: "",
  usage: ""
};