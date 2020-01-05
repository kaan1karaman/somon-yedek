const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => { 

  var user = message.mentions.users.first()

    if(!user){
        message.channel.send("Lütfen uyarmam için bir kullanıcı etiketleyin.")
    } else {
        var reason = args.splice(1).join(' ')
        if(!reason){
            message.channel.send('Bir sebep girmelisin.')
        } else {
            db.set(`reason_${user.id}_${message.guild.id}`, reason)
            user.send('Uyarıldınız.Sebep : ' + reason)
            if(db.has(`uyari_${user.id}_${message.guild.id}`) == false){
                db.set(`uyari_${user.id}_${message.guild.id}` , 1)
                console.log(db.fetch(`uyari_${user.id}_${message.guild.id}`))
            } else {
                db.add(`uyari_${user.id}_${message.guild.id}` , +1)
            }
        }
    }
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["uyar", "warn", "warning"],
 permLevel: 2
}
exports.help = {
 name: 'uyarı',
 description: 's',
 usage: 's'
};  