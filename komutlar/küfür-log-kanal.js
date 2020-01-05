const Discord = require('discord.js');
const debe = require('quick.db');
exports.run = async (client, message, args) => {
	if(!message.member.hasPermission("MANAGE_GUILD")) return;
  var kanal = message.mentions.channels.first() || client.channels.get(args.join(' '));
    if(!kanal)
      {
        return;
      } else 
        {
          debe.set(`kLog_${message.guild.id}`, kanal.id)
          message.channel.send(`<#${kanal.id}> kanalı küfür engel logu olarak ayarlandı.`)
        }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["küfür-log"],
  permLevel: 0
};
exports.help = {
  name: 'küfür-log-kanal',
  description: 's',
  usage: 's'
};
