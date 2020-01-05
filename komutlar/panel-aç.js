const discord = require("discord.js");
const client = new discord.Client();
const debe = require('quick.db');

exports.run = async (client, message, args) => {
  let ayar = await debe.fetch(`panelAyar_${message.guild.id}`)
  if(!args[0])
    {
      message.channel.send("Lütfen `aç` ya da `kapat` şeklinde bir ayar giriniz.")
    }
  if(args[0] == "aç")
    {
      if(ayar == "tru")
        {
          message.channel.send("Sistem zaten açık.")
          return;
        }
      debe.set(`panelAyar_${message.guild.id}`, 'tru');
      message.channel.send("Panel sistemi açıldı.")
    }
  if(args[0] == "kapat")
    {
      if(ayar == "fols")
        {
          message.channel.send("Sistem zaten kapalı.");
          return;
        }
      debe.set(`panelAyar_${message.guild.id}`, 'fols')
      message.channel.send("Panel sistemi kapatıldı.")
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["panelsistem"],
    permLevel: 0
};

exports.help = {
    name: "panel-sistem",
    description: "z",
    usage: "z"
};