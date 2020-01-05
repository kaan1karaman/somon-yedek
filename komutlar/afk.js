const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let sebep = args.splice(0, args.length).join(" ");
    if(!sebep)
    {
        message.channel.send("<a:carpi:657578582700326932> | AFK olma sebebini yazman gereklidir!").then(m => m.delete(5000));
    }
    else
    {
        let zaman = new Date().getTime();
        let own = message.author.id;
        db.set(`afkAuthor_${message.author.id}`, own);
        db.set(`afkZaman_${message.author.id}`, zaman);
        db.set(`afkOrNot_${message.author.id}`, "tru");
        db.set(`afkSebep_${message.author.id}`, sebep);
        message.channel.send(`<a:tik:657578533341888512> | **${sebep}** sebebi ile AFK moduna geçtiniz!`)
    }
}; 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
}
exports.help = {
 name: 'afk',
 description: 's',
 usage: 's'
};
