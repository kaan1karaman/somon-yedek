const Discord = require("discord.js");
const arraySort = require("array-sort");
const table = require("table");
exports.run = async (client, message, args, tools) => {
  let invites = await message.guild.fetchInvites();
  invites = invites.array();
  arraySort(invites, "uses", { reverse: true });
  let possibleInvites = [['Kullanıcı', 'Daveti']]
  invites.forEach(function(invite){
    possibleInvites.push([invite.inviter.username, invite.uses])
  })
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle("Davet Sistemi")
    .addField('Sıralama', `\`\`\`${table.table(possibleInvites)}\`\`\``)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["davet-sistem"],
  permLevel: 0
};

exports.help = {
  name: "davet-takip",
  description: "davet takip sistemi!",
  usage: ""
};