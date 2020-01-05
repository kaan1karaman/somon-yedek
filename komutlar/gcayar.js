const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let kanal = message.mentions.channels.first();
  if (!kanal) {
    message.channel.send("Lütfen bir kanal bilgisi giriniz.");
  } else {
    db.set(`gck_${message.guild.id}`, kanal.id);
    message.channel.send(`Giriş çıkış kanalı ${kanal} olarak ayarlandı.`);
  }

  if (args[0] === "sıfırla") {
    db.delete(`gck_${message.guild.id}`);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "girişçıkış",
  category: "",
  description: "",
  usage: "forceban "
};