const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if(!message.guild.me.voiceChannel)
    {
      message.channel.send("Bir sesli kanalda değilim.")
    }
  if(message.guild.me.voiceChannel)
    {
      message.guild.channels.get(message.guild.member.voiceChannel.id).leave();
      message.channel.send("Kanaldan ayrıldım!");
    }
};

//BU BOT CODARE SUNUCUSUNA AİTTİR YAPIMCILAR:%60 SOMON %40 ADLMedia

exports.conf = {
    enabled: true,
    aliases: ['dc'],
    permLevel: 0
};

exports.help = {
    name: 'disconncet',
    description: 'Bulunduğu kanaldan ayrılır.',
    usage: 'disconncet'
};
   