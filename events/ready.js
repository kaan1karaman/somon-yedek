const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[somon] Bütün komutlar yüklendi, bot çalıştırılıyor...`);
  console.log(`[somon] ${client.user.username} ismi ile Discord hesabı aktifleştirildi!`);
  client.user.setStatus("online");
  console.log(`[somon] Durum ayarlandı!`)
  client.user.setActivity("!js");
  console.log(`[somon] Oynuyor ayarlandı!`);
  console.log(`[somon] Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
 