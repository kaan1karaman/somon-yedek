const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let kişi = message.mentions.users.first() || client.users.get(args[0])
  if(!kişi) return message.channel.send("Hata 1")
  let rol = message.guild.roles.array().find(r => r.name.toLowerCase().includes(args[1]));
  if(!rol)
    {
      try
        {
          message.guild.createRole({
            name: args[0],
            color: "RANDOM",
            hoist: true,
            position: 0,
            mentionable: true,
            permissions: ["CREATE_INSTANT_INVITE", "ADD_REACTIONS", "VIEW_CHANNEL" ,"SEND_MESSAGES", "USE_EXTERNAL_EMOJIS", "CONNECT", "SPEAK", "USE_VAD", ""]
          })
        }
      catch (err)
        {
          console.log(err)
        }
    }
  if(message.guild.member(kişi).roles.has(rol))
    {
      message.channel.send("Bu kullanıcı bu role zaten sahip!")
    }
  else
    {
        message.guild.member(kişi).addRole(rol)
        message.channel.send(`<:tik:663293377260814356> | **${rol.name}** adlı rol **${kişi.username}** kullanıcısına verildi!`)
    }

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rol-ver", "rv"],
  permLevel: 0
};
exports.help = {
  name: "rolver",
};
