const discord = require("discord.js");
const client = new discord.Client();
const debe = require('quick.db');

exports.run = async (client, message, args) => 
{
    if(!message.member.roles.array().filter(r => r.id === "659464324338679856")[0])
    {
        message.channel.send("<a:carpi:657578582700326932> | Susturma yetkiniz yoktur!")
        return;
    }
    const mutee = message.mentions.members.first() || message.guild.members.get(args.join(' '));
    if(!mutee)
    {
        message.channel.send("Susturulacak kişiyi giriniz!");
        return;
    }
    let reason = args.splice(1, args.length).join(" ");
        if(!reason)
        {
            message.channel.send("Sebep giriniz!");
            return;
        }
    if(mutee.roles.has("640956456471887912"))
      {
        mutee.removeRole("640956456471887912")
        mutee.user.send(`**${message.guild.name}** sunucusundaki susturulma cezanız **${reason}** sebebi ile kaldırıldı!`)
        return;
      }
        message.guild.channels.forEach(async (channel, id) => {
            const muterol = "640956456471887912"; //buraya verilecek muteli rolünüzün id'sini yazınız!
            await channel.overwritePermissions(muterol,
                {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    SPEAK: false,
                })
        })
        setTimeout(async()=>{
          mutee.addRole("640956456471887912"); //buraya verilecek muteli rolünüzün id'sini yazınız!
          mutee.user.send(`**${message.guild.name}** sunucusunda **${reason}** sebebi ile susturuldunuz!`)
        }, 250)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["sustur"],
    permLevel: 1
};

exports.help = {
    name: "mutee",
    description: "z",
    usage: "z"
};