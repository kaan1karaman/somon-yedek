const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()
let e = message.guild.roles.find(`name`, `@everyone`)
let j = message.guild.roles.find(`name`, `JS`)
let kanal = message.mentions.channels.first()
if (!kanal) {
	message.channel.overwritePermissions(e, {
	'READ_MESSAGES': false,
	'SEND_MESSAGES': false,
	})
  message.channel.overwritePermissions(j, {
    'READ_MESSAGES': true,
    'SEND_MESSAGES': false,
  })
} else {
	kanal.overwritePermissions(e, {
		'READ_MESSAGES': false,
		'SEND_MESSAGES': false,
})
  message.channel.overwritePermissions(j, {
    'READ_MESSAGES': true,
    'SEND_MESSAGES': false,
  })
}


}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'kilit',
  description: 's',
  usage: 's'
};