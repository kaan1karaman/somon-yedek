const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  const filter = (reaction, user) => reaction.emoji.name === ["javascript", "javascriptplus"] && user.id === message.author.id
  const embed = new Discord.RichEmbed()
  .setTitle("Emoji rol sistemi!")
  .setDescription("<:javascript:659113357458276384> | Javascript\n\n<a:javascriptplus:659113380732469258> | Javascript+")
  .setFooter("-hamsi | -mayfya")
  message.channel.send(embed).then(love => {
    love.react('659113380732469258')
     love.react('659113357458276384').then(mayfe =>{

let likee = (reaction, user) => reaction.emoji.name === 'javascript' && user.id === message.author.id;   
let layk = (reaction, user) => reaction.emoji.name === "javascriptplus" && user.id === message.author.id;
  let laykl = love.createReactionCollector(layk, {max:1});
       laykl.on("collect", r => {
         message.member.addRole("654331060171046942")
         if(message.member.roles.has("654331060171046942")) {
           message.member.removeRole("654331060171046942")
         }
       })
  let ll = love.createReactionCollector(likee, {max:1});   
ll.on("collect", r => {
 
  
  message.member.addRole("653601791262457857")
  if(message.member.roles.has("653601791262457857")) {
    message.member.removeRole("653601791262457857")
  }
  
})

  })
})
}

exports.conf = {

    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "emoji-rol",
    description: "ByMayFe_0#2956 ve somon 戈#1923 'dan Sizlere Hediye!'",
    usage: "ByMayFe_0#2956 ve somon 戈#1923 'dan Sizlere Hediye!"
};

