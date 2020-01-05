const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  message.react('650588738698870784')
  if (message.member.roles.array().filter(r => r.name === "karaliste")) {
    let id = args[0];
    if (!id) {
      message.channel.send("Lütfen bir ID giriniz.");
    } else {
      let debe = await db.fetch(`karalist_${id}`);
      if (debe === null) {
        message.channel.send("Bu kullanıcı karalistede değil!");
      } else {
        message.channel.send(
          "Bu kullanıcı karalistede! Kaldırmak için 15 saniye içinde `evet` ya da `hayır` yazınız!"
        );
        let nmw03 = false;
        while (!nmw03) {
          const response = await message.channel.awaitMessages(
            neblm => neblm.author.id === message.author.id,
            { max: 1, time: 30000 }
          );
          const choice = response.first().content;
          if (choice === "hayır" || choice === "h")
            return message.reply("İşlem iptal edildi 🚀");
          if (choice !== "evet" && choice !== "e") {
            message.channel.send(
              "❓ Lütfen sadece **evet (e)** veya **hayır (h)** ile cevap verin."
            );
          }
          if (choice == "evet" || choice == "e") {
            nmw03 = true;
            message.reply("başarıyla karalisteden kaldırıldı!");
          }
        }
        if (nmw03) {
          try {
            let a = args[0];
            db.delete(`karalist_${a}`);
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
  } else {
    if (message.guild.id !== "640947987207421952") {
    } else {
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["clistekaldır", "whitelist", "beyazliste"],
  permLevel: 0
};

exports.help = {
  name: "ckaldır"
};
