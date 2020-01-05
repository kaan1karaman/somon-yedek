const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.roles.array().filter(r => r.name === "karaliste"[0])) {
  } else {
    if (message.guild.id !== "640947987207421952") {
    } else {
      let id = args[0];
      if (!id) {
        message.channel.send("Lütfen bir ID giriniz.");
      } else {
        if (isNaN(id)) {
          message.channel.send("Lütfen bir sayı giriniz.");
        } else {
          let sebep = args.splice(1, args.length).join(" ");
          if (!sebep) {
            message.channel.send("Lütfen bir sebep giriniz.");
          } else {
            if (sebep.length < 3) {
              message.channel.send(
                "Lütfen 3 karakterden daha büyük bir sebep giriniz."
              );
            } else {
              if (sebep.length > 200) {
                message.channel.send(
                  "Lütfen 200 karakterden daha küçük bir sebep giriniz."
                );
              } else {
                let b = await db.fetch(`karalist_${id}`);
                if (b === null) {
                  let d = await db.set(`karalist_${id}`, `${sebep} | ${message.author.tag} | ${message.author.id}`);
                  console.log("DB oluşturuldu!");
                  message.channel.send(
                    `**${id}** ID'li kullanıcı **${sebep}** sebebinden karalisteye alındı!`
                  );
                } else {
                  message.channel.send(
                    `Bu kullanıcı karalistede! Sebebi:\n\n**${b}**`
                  );
                }
              }
            }
          }
        }
      }
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["clist"],
  permLevel: 0
};

exports.help = {
  name: "cliste",
  description: ".",
  usage: "."
};
