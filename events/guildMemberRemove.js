const Discord = require("discord.js");
const db = require("quick.db");

module.exports = async member => {
  var a = await db.fetch(`gck_${member.guild.id}`);
  var abul = member.guild.channels.find(`id`, a);
  if (!a) {
  } else {
    const embed = new Discord.RichEmbed()
      .setAuthor("Bir kullanıcı katıldı!")
      .setDescription(`${member.user.tag} adlı kullanıcı sunucudan ayrıldı!`)
      .setColor("RED");
    member.guild.channels.get(a).send(embed);
  }
};
