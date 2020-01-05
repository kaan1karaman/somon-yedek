const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
  const rol = message.guild.roles.get("640952330140909584")
  let usser = message.mentions.users.first() || client.users.get(args.join(' '))
  let member = message.guild.member(usser).removeRoles(message.guild.members.get(usser.id).roles)
    let member2 = message.guild.member(usser).addRole(rol)
}; 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["jail"],
 permLevel: 2
}
exports.help = {
 name: 'hapis',
 description: 's',
 usage: 's'
};
