const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if(message.author.id !== "339439720289271808") return message.reply('Bu komut bot sahibine özeldir!')
  let codein = args.slice(0).join(' ')
  if(!codein.toLowerCase().includes('token')) {
  try {
      let code = eval(codein)
      if (codein.length < 1) return message.channel.send(`:x: Bir kod girmelisin.`)
      if (typeof code !== 'string')    
        code = require('util').inspect(code, { depth: 0 });
      
      const embed = new Discord.RichEmbed()
      .setColor('GREEN')
      .addField('Kod', `\`\`\`js\n${codein.length > 1024 ? "Karakter aşımı!" : codein}\`\`\``)
      .addField('Sonuç', `\`\`\`js\n${code.length > 1024 ? "Karakter aşımı!" : code}\n\`\`\``)
      message.channel.send(embed).then(embed => embed.react("✅"))
  } catch(e) {
    let embed2 = new Discord.RichEmbed()
    .setColor('RED')
    .addField('Kod', `\`\`\`js\n${codein.length > 1024 ? "Karakter aşımı!" : codein}\`\`\``)
    .addField('Hata', `\`\`\`js\n${e.length > 1024 ? "Karakter aşımı!" : e}\`\`\``)
    message.channel.send(embed2);
  }
  } else {
    message.reply('Fazla zekisin herhalde xD?')
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'eval',
    description: 'Kod denemeyi sağlar.',
    usage: 'eval <kod>',
    kategori: 'sahip'
  };