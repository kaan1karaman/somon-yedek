const Discord = require('discord.js')
const snek = require('snekfetch');
const moment = require('moment');
require('moment-duration-format');
exports.run = async (bot, message, args) => {

if (args.length === 0) return message.reply('Bir modül yazmalısın.');
const query = args.join(' ');
try {
const { body } = await snek.get(`https://registry.npmjs.com/${query.toLowerCase()}`);
const version = body.versions[body['dist-tags'].latest];
let deps = version.dependencies ? Object.keys(version.dependencies) : null;
let maintainers = body.maintainers.map(user => user.email);
let bugs = body.bugs.url;
let github = version.repository.url
let gitshort = github.slice(23, -4)


if (maintainers.length > 10) {
const len = maintainers.length - 10;
maintainers = maintainers.slice(0, 10);
maintainers.push(`...${len} daha fazla.`);
}

if (deps && deps.length > 10) {
const len = deps.length - 10;
deps = deps.slice(0, 10);
deps.push(`...${len} daha fazla.`);
}

function customTemplate() {
return this.duration.asSeconds() >= 86400 ? "w [hafta], d [gün]" : "h [saat], m [dakika], s [saniye]";
}

let updated = moment.duration(Date.now() - new Date(body.time[body['dist-tags'].latest]).getTime()).format(customTemplate, {
trim: false
});


const embed = new Discord.RichEmbed()
.setColor(0xCB3837)
.setAuthor(`${body.name} - Modül Bilgisi`, 'https://i.imgur.com/ErKf5Y0.png')
.setThumbnail('https://i.imgur.com/8DKwbhj.png')
.addField(`Açıklama`, `${version.description || 'Açıklama yok.'}\n\u200B`)
.addField(`Hata Bildirimi`, `${bugs}`)
.addField(`Güncelleme`, `${updated} zaman önce`, true)
.addField('Versiyon', `${body['dist-tags'].latest}`, true)
.addField('Lisans', `${body.license}\n\u200B`, true)
.addField('Maintainers', maintainers.join(', '), true)

.addField('Dependencies', `${deps && deps.length ? deps.join(', ') : '*None*'}\n\u200B`, false)
.addField('\`Modül\`', `[https://www.npmjs.com/package/${query.toLowerCase()}](https://www.npmjs.com/package/${query.toLowerCase()})`)
.addField('\`Github\`', `[https://www.github.com/${gitshort}](https://www.github.com/${gitshort})`)

message.channel.send({embed});
} catch (error) {
if(error.status == 404) return message.channel.send('**Herhangi bir sonuç bulunamadı.**');
console.log(error);
}  

}
exports.conf = {
  aliases: [],
  guildOnly: false,
  enabled: true,
  permlevel: 0
  
}
exports.help = {
  name: "npm",
}