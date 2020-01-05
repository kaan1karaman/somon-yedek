/////BU SATIRDAN BAŞLAYARAK, 126. SATIRA KADAR OLAN HİÇBİR ŞEY SİLİNMEYECEKTİR!
///355. satırı kendinize göre güncelleyiniz.(Botun dmsinin gönderilmesini istediğiniz kanalın id'sini yazınız.)

///Bu altyapıyı kullanan herkes, DUYURU.md'de yazan şartları kabul etmiş sayılır.

const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const http = require("http");
const moment = require("moment");
const express = require("express");
const app = express();
const search = require("youtube-search");
const opts = {
  maxResults: 25,
  key: ayarlar.YOUTUBE_API,
  type: "video"
};
let PREFIX = "!!"; ///BURAYA PREFIXINIZI YAZIN!
require("./util/eventLoader")(client);

app.get("/", (request, response) => {
  //console.log(Date.now() + " BOT Aktif.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 2800);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[somon#9999] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} adet komut yüklenmeye hazır. Başlatılıyor...`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Komut yükleniyor: ${props.help.name}'.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});
const { RichEmbed } = require("discord.js");

///DOKUNMA

client.on("message", msg => {
  if (msg.content.toLowerCase() === "atatürk") {
    msg.react("655459035293679616");
    msg.channel
      .send("Demek Atatürk fotoğrafı istiyorsun..")
      .then(m => m.delete(1750))
      .then(() =>
        msg.channel.sendFile(
          "https://media.tenor.com/images/2a371417514c50ef45dba5170e037503/tenor.gif"
        )
      );
  }
});
client.on("message", msg => {
  if (msg.content.includes("atatürk")) {
    msg.react("655459035293679616");
  }
});

///oto cevaplar bitiş
client.on("message", async msg => {
  var mayfe = await db.fetch(`reklam_${msg.guild.id}`);
  if (mayfe == "acik") {
    const birisireklammidedi = [
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      "net",
      ".rf.gd",
      ".az",
      ".party",
      "discord.gg",
      "hasteb.in"
    ];
    if (birisireklammidedi.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();
          return msg
            .reply(
              "Bu Sunucuda Reklam Engelleme Filtresi Aktiftir. Reklam Yapmana İzin Veremem !"
            )
            .then(msg => msg.delete(3000));

          msg.delete(3000);
        }
      } catch (err) {
        console.log(err);
      }
    }
  } else if (mayfe == "kapali") {
  }
  if (!mayfe) return;
});

client.on("message", async message => {
  let ayar = await db.fetch(`emoji${message.guild.id}`);
  let mesaj = await db.fetch(`mesaj${message.guild.id}`);

  let mesajlogat = message.guild.channels.get(mesaj);

  if (ayar == "Kapalı") return;
  if (message.channel.id !== mesaj) return;

  if (ayar == "Açık") {
    if (message.content === `${prefix}emojirolbaşlat`) {
      if (message.author.bot) return;
      message.channel.bulkDelete(1);
      mesajlogat
        .send(`Javascript rolü almak için basınız!`)
        .then(async function(sentEmbed) {
          // BU MESAJI DEĞİŞTİREBİLİRSİNİZ

          const emojideistir = ["✅"];
          const filter = reaction => emojideistir.includes(reaction.emoji.name);
          await sentEmbed.react(emojideistir[0]).catch(function() {});
          var reactions = sentEmbed.createReactionCollector(filter, {});

          client.on("messageReactionAdd", async (reaction, user) => {
            var rol = await db.fetch(`emojirol${message.guild.id}`);
            let rol2 = reaction.message.guild.roles.find("id", rol);
            if (!user) return;
            if (user.bot) return;
            if (!reaction.message.channel.guild) return;

            if (reaction.emoji.name == "✅") {
              reaction.message.guild
                .member(user)
                .addRole(rol2)
                .catch(console.error);
            }
          });
        });
    }
  }
});

client.on("message", msg => {
  if (msg.content == "!!js+") {
    msg.delete(1500);
    if (msg.channel.id !== "653115810948055040")
      return msg.channel
        .send(
          "<a:carpi:657578582700326932> | Lütfen komutunuzu <#653115810948055040> kanalında kullanınız!"
        )
        .then(m => m.delete(5500));
    msg.member.addRole("654331060171046942");
    msg.channel.send("Javascript+ rolün verildi! Bırakmak için tekrar yaz!");
    if (msg.member.roles.has("654331060171046942")) {
      msg.member.removeRole("654331060171046942");
      msg.channel.send("Javascript+ rolün alındı! Almak için tekrar yaz!");
    }
  }
});


client.on("message", m =>{
  if(m.content.startsWith('?')) {
    m.reply("Prefixim + oldu")
  }
})

client.on("message", m => {
  if (m.channel.id !== "654720710299615262") {
    return;
  }
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.content.toLowerCase() == "sa")
    return m.react("🇸").then(() => m.react("🇦"));
});

client.on("message", async message => {
  const kufurrakam = db.fetch(`kRakam_${message.guild.id}`);
  const lchannel = db.fetch(`kLog_${message.guild.id}`);
  const lChannel = message.guild.channels.get(lchannel);
  const nekadar =
    db.fetch(`kufretti_${message.guild.id}_${message.author.id}`) + 1;
  var debe = db.fetch(`kEngel_${message.guild.id}`);
  if (debe == "fols") {
    return;
  }
  if (debe == "tru") {
    const badwords = [
      " am ",
      "amcık",
      "sg",
      "oç",
      "pic",
      "pıc",
      "piç",
      "pıç",
      "yarrak",
      "yarak",
      " sik",
      "sikik",
      "sokuk",
      "yavşak",
      "yavsak",
      "göt",
      "sikimi",
      "sikim",
      "pezevenk",
      "pezeveng",
      "pezvk",
      "pzvk",
      "amk",
      "aq",
      " ak",
      "mk",
      "mq",
      "s2k",
      "s2şik",
      "yarram",
      "ammına",
      "salak",
      "aptal",
      "mal",
      "gerizekalı",
      "geri zekalı",
      "m4l",
      "s4l4k",
      "slk"
    ];
    let mesaj = false;
    for (var i in badwords) {
      if (message.content.toLowerCase().includes(badwords[i].toLowerCase()))
        mesaj = true;
    }
    if (mesaj) {
      if (!message.member.hasPermission("KICK_MEMBERS")) {
        try {
          message.delete();
          setTimeout(async () => {
            if (
              db.has(`kufretti_${message.guild.id}_${message.author.id}`) ==
              false
            ) {
              db.set(`kufretti_${message.guild.id}_${message.author.id}`, 1);
            } else {
              db.add(`kufretti_${message.guild.id}_${message.author.id}`, 1);
            }
            if (db.has(`kRakam_${message.guild.id}`) == true) {
              const kufur = db.fetch(
                `kufretti_${message.guild.id}_${message.author.id}`
              );
              if (kufur > kufurrakam - 1) {
                message.author.send(
                  `Ettiğiniz küfür sayısı **${kufurrakam}** sayısını geçtiği için **${message.guild.name}** adlı sunucudan atıldınız.`
                );
                setTimeout(() => {
                  return message.member.kick(
                    `${kufurrakam} sayısından fazla küfür ettiği için atıldı.`
                  );
                }, 250);
                db.delete(`kufretti_${message.guild.id}_${message.author.id}`);
              }
            }
            const kufur = db.fetch(
              `kufretti_${message.guild.id}_${message.author.id}`
            );

            message.author.send(
              `Küfür etmemelisin! **${message.guild.name}** sunucusunda **${kufurrakam}** sayısını geçersen sunucudan atılıyorsun.\nŞu ana kadar ettiğin küfürler: **${nekadar}**`
            );
            message.channel
              .send(
                `<@${message.author.id}>, küfür etmeyi bırakmalısın! Bu sunucuda **${kufurrakam}** sayısını geçersen sunucudan atılıyorsun.\nŞu ana kadar ettiğin küfürler: **${nekadar}**`
              )
              .then(m => m.delete(5000));
          }, 250);
          const embed = new Discord.RichEmbed()
            .setAuthor("Küfür-log sistemi")
            .addField(`Küfür eden:\n`, `${message.author.tag}`)
            .addField(`Küfür eden ID:\n`, `${message.author.id}`)
            .addField(`Mesaj:\n`, `${message.content}`)
            .addField(`Küfür-kick miktarı:\n`, `${kufurrakam}`)
            .addField(`Kullanıcının küfür sayısı:\n`, `${nekadar}`)
            .setFooter("Codare!")
            .setColor("RED");
          lChannel.send(embed);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
});

client.on("message", m => {
  if (m.content == `${ayarlar.prefix}durum-reklam`) {
    if (m.member.hasPermission("BAN_MEMBERS")) {
      m.delete();
      const custom = m.guild.members.filter(m =>
        m.user.presence.game.includes("glitch")
      );
      custom.forEach(s => {
        m.channel.send(s.user.tag);
      });
    } else {
    }
  }
});

client.on("message", m => {
  if (!m.member.hasPermission("MANAGE_GUILD")) return;
  if (m.content == ayarlar.prefix + "panel-başlat") {
    let embed = new Discord.RichEmbed()
      .setAuthor("Panel başlatıldı!")
      .setDescription(`${m.author.tag}'ın talebi ile paneli açıyorum!'`)
      .setFooter("-somon | codare");
    m.channel.send(embed).then(msg => {
      db.set(`panelSistem_{m.guild.id}`, "açık");
      db.set(`panelMsg_${m.guild.id}`, msg.id);
      db.set(`panelCh_${m.guild.id}`, msg.channel.id);
    });
  } else if (m.content == ayarlar.prefix + "panel-kapat") {
    if (db.has(`panelSistem_${m.guild.id}`) == false) {
      m.channel.send("Panel sistemi zaten kapalı.");
    } else if (db.has(`panelSistem_${m.guild.id}`) == true) {
      db.set(`panelSistem_{m.guild.id}`, "kapalı");
      db.delete(`panelMsg_${m.guild.id}`);
      db.delete(`panelCh_${m.guild.id}`);
    }
  }
});
client.on("guildMemberAdd", async member => {
  const msg = await db.fetch(`panelMsg_${member.guild.id}`);
  const c = await db.fetch(`panelMsg_${member.guild.id}`);
  const ch = client.channels.get(c);
  const sistem = await db.fetch(`panelSistem_${member.guild.id}`);
  if (sistem == "kapalı") return;
  if (sistem === "açık") {
    ch.fetchMessage(msg).then(msg => {
      msg.react("650588738698870784");
    });
  }
});

client.on("guildMemberAdd", async member => {
  member.setNickname("somon");
});
client.on("messageUpdate", (old, nev) => {
  if (old.content != nev.content) {
    const yasak = [
      "discord.app",
      "discord.gg",
      "invite",
      "discordapp",
      "discordgg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az",
      "sg",
      "oç",
      "oçe",
      "anan",
      "ananı",
      "ananı sikim",
      "anneni sikim",
      "anneni sikeyim",
      "ananı sikeyim",
      "annen",
      "ağzına",
      "ağzına sıçim",
      "ağzına sıçayım",
      "ağzına s",
      "am",
      "ambiti",
      "amını",
      "amını s",
      "amcık",
      "amcik",
      "amcığını",
      "amciğini",
      "amcığını",
      "amcığını s",
      "amck",
      "amckskm",
      "amcuk",
      "amına",
      "amına k",
      "amınakoyim",
      "amına s",
      "amunu",
      "amını",
      "amın oğlu",
      "amın o",
      "amınoğlu",
      "amk",
      "aq",
      "amnskm",
      "anaskm",
      "ananskm",
      "amkafa",
      "amk çocuğu",
      "amk oç",
      "piç",
      "amk ç",
      "amlar",
      "amcıklar",
      "amq",
      "amındaki",
      "amnskm",
      "ananı",
      "anan",
      "ananın am",
      "ananızın",
      "aneni",
      "aneni s",
      "annen",
      "anen",
      "ananın dölü",
      "sperm",
      "döl",
      "anasının am",
      "anası orospu",
      "orospu",
      "orosp,",
      "kahpe",
      "kahbe",
      "kahße",
      "ayklarmalrmsikerim",
      "ananı avradını",
      "avrat",
      "avradını",
      "avradını s",
      "babanı",
      "babanı s",
      "babanın amk",
      "annenin amk",
      "ananın amk",
      "bacı",
      "bacını s",
      "babası pezevenk",
      "pezevenk",
      "pezeveng",
      "kaşar",
      "a.q",
      "a.q.",
      "bitch",
      "çük",
      "yarrak",
      "am",
      "cibiliyetini",
      "bokbok",
      "bombok",
      "dallama",
      "göt",
      "götünü s",
      "ebenin",
      "ebeni",
      "ecdadını",
      "gavat",
      "gavad",
      "ebeni",
      "ebe",
      "fahişe",
      "sürtük",
      "fuck",
      "gotten",
      "götten",
      "göt",
      "gtveren",
      "gttn",
      "gtnde",
      "gtn",
      "hassiktir",
      "hasiktir",
      "hsktr",
      "haysiyetsiz",
      "ibne",
      "ibine",
      "ipne",
      "kaltık",
      "kancık",
      "kevaşe",
      "kevase",
      "kodumun",
      "orosbu",
      "fucker",
      "penis",
      "pic",
      "porno",
      "sex",
      "sikiş",
      "s1kerim",
      "s1k",
      "puşt",
      "sakso",
      "sik",
      "skcm",
      "siktir",
      "sktr",
      "skecem",
      "skeym",
      "slaleni",
      "sokam",
      "sokuş",
      "sokarım",
      "sokarm",
      "sokaym",
      "şerefsiz",
      "şrfsz",
      "sürtük",
      "taşak",
      "taşşak",
      "tasak",
      "tipini s",
      "yarram",
      "yararmorospunun",
      "yarramın başı",
      "yarramınbaşı",
      "yarraminbasi",
      "yrrk",
      "zikeyim",
      "zikik",
      "zkym"
    ];
    if (yasak.some(banned => nev.content.includes(banned))) {
      if (!nev.member.hasPermission("MANAGE_MESSAGES")) {
        try {
          nev.delete();
          nev.channel.send(
            `<@${nev.author.id}>, bu sunucuda mesajını düzenleyerek küfür edemez veya reklam yapamazsın!`
          );
          nev.author.send(
            `<@${nev.author.id}>, **${nev.guild.name}** adlı sunucuda mesajını düzenleyerek küfür edemez veya reklam yapamazsın!`
          );
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
});
client.on("guildMemberAdd", async member => {
  if (member.user.bot) {
    const ever = member.guild.roles.find(r => r.name === "@everyone");
    let bots1 = member.guild.members.filter(m => m.user.bot).size - 1;
    let bots = member.guild.members.filter(m => m.user.bot).size;
    const botKanal = member.guild.channels.find(
      c => c.name === `Toplam Bot: ${bots1}`
    );
    if (!botKanal) {
      try {
        member.guild.createChannel(`Toplam Bot: ${bots}`, "voice").then(ch => {
          ch.overwritePermissions(ever, {
            CONNECT: false
          });
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      if (botKanal.name === `Toplam Bot: ${bots1}`) {
        botKanal.setName(`Toplam Bot: ${bots}`);
      }
    }
  } else {
    const ever = member.guild.roles.find(r => r.name === "@everyone");
    let bots1 = member.guild.members.filter(m => !m.user.bot).size - 1;
    let bots = member.guild.members.filter(m => !m.user.bot).size;
    const botKanal = member.guild.channels.find(
      c => c.name === `Toplam Bot: ${bots1}`
    );
    if (!botKanal) {
      try {
        member.guild.createChannel(`Toplam Bot: ${bots}`, "voice").then(ch => {
          ch.overwritePermissions(ever, {
            CONNECT: false
          });
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      botKanal.setName(
        "Toplam Üye: " + member.guild.members.filter(m => !m.user.bot).size
      );
    }
  }
  const online = member.guild.members.filter(
    m => m.user.presence.status != "offline" || !m.user.bot
  ).size;
  const online1 =
    member.guild.members.filter(
      m => m.user.presence.status != "offline" || !m.user.bot
    ).size - 1;
  const ofKanal = member.guild.channels.find(
    c => c.name === `Çevrimiçi Üye: ${online1}`
  );
  if (!ofKanal) {
    try {
      member.guild
        .createChannel(`Çevrimiçi Üye: ${online}`, "voice")
        .then(ch => {
          const ever = member.guild.roles.find("name", "@everyone");
          ch.overwritePermissions(ever, {
            CONNECT: false
          });
        });
    } catch (err) {
      console.log(err);
    }
  }
});
client.on("guildMemberRemove", async member => {
  if (member.user.bot) {
    const bots = member.guild.members.filter(r => r.user.bot).size + 1;
    const bots1 = member.guild.members.filter(r => r.user.bot).size;
    console.log(bots);
    const botKanal = member.guild.channels.find(
      r => r.name === `Toplam Bot: ${bots}`
    );
    if (!botKanal) {
    } else {
      if (botKanal.name === `Toplam Bot: ${bots}`) {
        botKanal.setName(`Toplam Bot: ${bots1}`);
      }
    }
  } else {
    const l = member.guild.members.filter(r => !r.user.bot).size + 1;
    const s = member.guild.members.filter(r => !r.user.bot).size;
    console.log(l);
    const botKanal = member.guild.channels.find(
      r => r.name === `Toplam Üye: ${l}`
    );
    if (!botKanal) {
    } else {
      if (botKanal.name === `Toplam Üye: ${l}`) {
        botKanal.setName(`Toplam Üye: ${s}`);
      }
    }
  }
  const l = member.guild.members.filter(
    m => m.user.presence.status != "offline" && !m.user.bot
  ).size;
  const s =
    member.guild.members.filter(
      m => m.user.presence.status != "offline" && !m.user.bot
    ).size + 1;
  const ofKanal = member.guild.channels.find(
    c => c.name === `Çevrimiçi Üye: ${s}`
  );
  if (!ofKanal) {
  } else {
    if (ofKanal.name === `Çevrimiçi Üye: ${s}`) {
      ofKanal.setName(`Çevrimiçi Üye: ${l}`);
    }
  }
});








client.on("message", msg=>{
  if(db.fetch(`selfEngelle_${msg.guild.id}`) !== "tru") return;
      if(!msg.author.bot && msg.embeds.size > 0)
        {
              msg.author.ban(1, "CodAre self engelleme sistemi!")
        }
})






client.on("message", async msg => {
  let a
})
















client.login(ayarlar.token);
