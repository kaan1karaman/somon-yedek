const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.roles.array().filter(r => r.name === "karaliste")) {
  } else {
    if (message.guild.id !== "640947987207421952") {
    } else {
      const id = args[0];
      if (!id) {
        message.channel.send("Lütfen sorgulamak üzere bir ID giriniz.");
      } else {
        let id = args[0];
        let sebep = db.fetch(`karalist_${id}`);
        if (sebep === null) {
          message.channel.send("Bu kullanıcı karalistede değil!");
        } else {
          message.channel.send(
            `${id} ID'li kullanıcı karalistede! Sebebi:\n\n**${sebep}**`
          );
        }
      }
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["clistesorgu"],
  permLevel: 0
};
exports.help = {
  name: "csorgu",
  description: ".",
  usage: "."
};
