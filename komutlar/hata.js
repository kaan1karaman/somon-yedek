const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let usser =
    message.mentions.members.first() ||
    message.guild.members.find(`id`, args.join(" "));
  if (!usser)
    return message.channel.send(
      "Lütfen bir kullanıcı etiketle ya da ID'sini gir."
    );
  let rol = "655435099386544158";
  if (!usser.roles.has(rol)) {
    usser.addRole(rol);
    message.channel.send("Belirttiğiniz kullanıcıya başarıyla rolü verildi.");
  } else {
    usser.removeRole(rol);
    message.channel.send("Belirttiğiniz kullanıcıdan başarıyla rolü alındı.");
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "hatalar"
};