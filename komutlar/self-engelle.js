const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {
  var prefix = ayarlar.prefix;
  if(!["aç", "kapat"].includes(args[0]))
    {
      message.channel.send("Lütfen ayarınızı `aç` veya `kapat` şeklinde yazınız.")
    }
  else
    {
      if(args[0] === "aç")
        {
          let s = await db.fetch(`selfEngelle_${message.guild.id}`)
          if(s !== null)
            {
              message.channel.send("Sistem zaten açık!")
            }
          else
            {
              db.set(`selfEngelle_${message.guild.id}`, "tru")
              message.channel.send("Sistem başarıyla `açık` hâle getirildi.")
            }
        }
      if(args[0] === "kapat")
        {
          let s = await db.fetch(`selfEngelle_${message.guild.id}`)
          if(s !== null)
            {
              message.channel.send("Sistem zaten kapalı!")
            }
          else
            {
              db.set(`selfEngelle_${message.guild.id}`, "fols")
              message.channel.send("Sistem başarıyla `kapalı` hâle getirildi.")
            }
        }
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["self-engelle", "self-engel", "selfengel"],
  permLevel: 0
};
exports.help = {
  name: "selfengelle"
};
