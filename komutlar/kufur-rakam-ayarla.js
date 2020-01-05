const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
	if(!message.member.hasPermission("MANAGE_GUILD")) return;
  if(args[0] == "kapat")
    {
      if(db.has(`kRakam_${message.guild.id}`) == false)
        {
          return message.channel.send("Sistem zaten kapalı.")
        }
      if(db.has(`kRakam_${message.guild.id}`) == true)
        {
          message.channel.send("Sistem kapatıldı.")
          setTimeout(()=>{
            db.delete(`kRakam_${message.guild.id}`);
          }, 150)
          return;
        }
    }
  let rakam = Number(args[0])
  if(rakam < 1 || rakam > 50 || !rakam) return message.channel.send("Lütfen geçerli bir sayı giriniz.\n50'den büyük değerler **geçersiz** kabul edilmektedir.")
  if(db.has(`kRakam_${message.guild.id}`) == true)
    {
      db.delete(`kRakam_${message.guild.id}`)
      setTimeout(()=>{
        db.set(`kRakam_${message.guild.id}`, rakam)
        message.channel.send(`Küfür-kick rakamı **${rakam}** olarak yeniden ayarlandı.`)
      }, 350)
    } else 
      {
        let rkkm = db.fetch(`kRakam_${message.guild.id}`)
        if(rakam === rkkm) return message.channel.send("Önceden ayarlanmış değer ile şimdi girdiğiniz değer aynı!")
        db.set(`kRakam_${message.guild.id}`, rakam)
        message.channel.send(`Küfür-kick rakamı **${rakam}** olarak ayarlandı.`)
      }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["küfürrakamayarla"],
  permLevel: 0
};
exports.help = {
  name: 'küfür-rakam-ayarla',
  description: 's',
  usage: 's'
};
