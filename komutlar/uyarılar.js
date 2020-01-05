const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
 
let user = message.mentions.users.first()
  if(!user) return message.channel.send("Bir kullanıcı girmelisiniz.")
let uyarılar = await db.fetch(`uyari_${user.id}_${message.guild.id}`)
  if(!uyarılar) return message.channel.send("Bu kullanıcı uyarılmamış.")
} 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 4
}
exports.help = {
 name: 'uyarılar',
 description: 's',
 usage: 's'
};
