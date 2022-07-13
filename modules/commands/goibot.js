const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "manhIT",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["hello Mwuah❤️", "ops bakit??", "I love you too😚", "Love you❤", "Hi, hello baby wife :3", "ang kulit mo", "tawag ka ng tawag sa admin ko 🙄!", "You're the cutest person on the planet", "anong sinasabi mo jan kupal?", "ano!!~~~~", "I love the most" , "ang pogi ng admin ko promise!", "ang cute ng admin ko promise!", "ung admin ko mapagmahal😻", "bakit baby?", "why mahal ko?", "Good luck :))) ", "mahalin nio na admin ko", "wag ako tawagin mo yung admin ko", "tang ina mo spam pa gago", "wag spam hoi", "bot kadin😾", "galit na ung admin ko spam pa kasi"];
  var rand = tl[Math.floor(Math.random() * tl.length)]


  if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "morning")) {
    return api.sendMessage("magandang umaga dn sayo kupal😚", threadID);
  };

  if ((event.body.toLowerCase() == "no") || (event.body.toLowerCase() == "wag")) {
    return api.sendMessage("edi don't😠", threadID);
  };

  if ((event.body.toLowerCase() == "hatdog") || (event.body.toLowerCase() == "hotdog")) {
    return api.sendMessage("UwU", threadID);
  };

  if ((event.body.toLowerCase() == "sabog") || (event.body.toLowerCase() == "lutang")) {
    return api.sendMessage("kulang lang sa tulog lods", threadID);
  };

  if ((event.body.toLowerCase() == "ml") || (event.body.toLowerCase() == "arat ml")) {
    return api.sendMessage("puro ka ml mag module ka naman", threadID);
  };

  if ((event.body.toLowerCase() == "edit") || (event.body.toLowerCase() == "jedug jedag")) {
    return api.sendMessage("penge maangas na preset", threadID);
  };

  if ((event.body.toLowerCase() == "wala lang") || (event.body.toLowerCase() == "wla lang")) {
    return api.sendMessage("edi wow", threadID);
  };

  if ((event.body.toLowerCase() == "love u") || (event.body.toLowerCase() == "labyu")) {
    return api.sendMessage("d kita lab bahala ka manigas ka jan!", threadID);
  };

  if ((event.body.toLowerCase() == "burn") || (event.body.toLowerCase() == "owshiee")) {
    return api.sendMessage("ako lang toh", threadID);
  };

  if ((event.body.toLowerCase() == "hahaha") || (event.body.toLowerCase() == "HAHAHA")) {
    return api.sendMessage("️happy? :)", threadID);
  };

  if ((event.body.toLowerCase() == "WHAHAHAHA") || (event.body.toLowerCase() == "hahahaha")) {
    return api.sendMessage("️happy? :)", threadID);
  };

  if ((event.body.toLowerCase() == "curse") || (event.body.toLowerCase() == "chui cmm")) {
    return api.sendMessage("Who curses?", threadID);
  };

  if ((event.body.toLowerCase() == "crush reveal") || (event.body.toLowerCase() == "crush rebil")) {
    return api.sendMessage("leley spam😳 crush ni master", threadID);
  };

  if ((event.body.toLowerCase() == "hentai") || (event.body.toLowerCase() == "Hentai")) {
    return api.sendMessage("Yes Hentai, I love watching it", threadID);
  };

  if ((event.body.toLowerCase() == "pota") || (event.body.toLowerCase() == "powtah")) {
    return api.sendMessage("hoii bawal mag mura gago ayy jk HAHAHAHA", threadID);
  };

  if ((event.body.toLowerCase() == "edi dont") || (event.body.toLowerCase() == "edi don't")) {
    return api.sendMessage("talaga!! bahala ka jan hmmp!", threadID);
  };

  if ((event.body.toLowerCase() == "@Jhay") || (event.body.toLowerCase() == "@Jhay Dominic Abata")) {
    return api.sendMessage("busy ung pogi kong master", threadID);
  };

  if ((event.body.toLowerCase() == "HAHA") || (event.body.toLowerCase() == "HA-HA-HA")) {
    return api.sendMessage("haha natawa ako sobra :)", threadID);
  };

  if ((event.body.toLowerCase() == "edi wow") || (event.body.toLowerCase() == "ediwow")) {
    return api.sendMessage("pangit mo", threadID);
  };

  if ((event.body.toLowerCase() == "meron") || (event.body.toLowerCase() == "wala")) {
    return api.sendMessage("sheesh", threadID);
  };

  if ((event.body.toLowerCase() == "wla") || (event.body.toLowerCase() == "mron")) {
    return api.sendMessage("sheesh", threadID);
  };

  if ((event.body.toLowerCase() == "nays") || (event.body.toLowerCase() == "nc")) {
    return api.sendMessage("ako lang toh", threadID);
  };  

  if ((event.body.toLowerCase() == "desurb") || (event.body.toLowerCase() == "dserb")) {
    return api.sendMessage("LOL", threadID);
  };

  if ((event.body.toLowerCase() == "sungit mo") || (event.body.toLowerCase() == "sungit mo naman")) {
    return api.sendMessage("kasalanan yan ng gumawa saken :)", threadID);
  };  

  if ((event.body.toLowerCase() == "bat ganyan ka?") || (event.body.toLowerCase() == "bat ka ganyan?")) {
    return api.sendMessage("ikaw kaya gumawa saken kaya wag mokong sisihin", threadID);
  };

  if ((event.body.toLowerCase() == "ang sama mo saken") || (event.body.toLowerCase() == "sama mo sakin")) {
    return api.sendMessage("talaga!! kasalanan mo yan ginawa moko ehh!! hmmp", threadID);
  };

  if ((event.body.toLowerCase() == "ang tino mo naman kausap") || (event.body.toLowerCase() == "ang tino mo kausap")) {
    return api.sendMessage("kung ayaw moko kausap edi wag maghanap ka ng iba chee!! hmmp!", threadID);
  };

  if ((event.body.toLowerCase() == "maspangit ka") || (event.body.toLowerCase() == "mas pangit ka")) {
    return api.sendMessage("️roses are red, violets and blue... when I flash the toilet I remember you", threadID);
  };

  if ((event.body.toLowerCase() == "angas") || (event.body.toLowerCase() == "agnas")) {
    return api.sendMessage("️UwU ako lang toh", threadID);
  };

  if ((event.body.toLowerCase() == "lupet") || (event.body.toLowerCase() == "lupit")) {
    return api.sendMessage("️UwU ako lang toh", threadID);
  };

  if ((event.body.toLowerCase() == "oy") || (event.body.toLowerCase() == "guys")) {
    return api.sendMessage("️ops?", threadID);
  };

  if ((event.body.toLowerCase() == "ganda mo") || (event.body.toLowerCase() == "ang ganda")) {
    return api.sendMessage("️mas maganda ka uwu :>>", threadID);
  };

  if ((event.body.toLowerCase() == "ganda") || (event.body.toLowerCase() == "angganda")) {
    return api.sendMessage("️mas maganda ka uwu :>>", threadID);
  };

  if ((event.body.toLowerCase() == "alam ko") || (event.body.toLowerCase() == "alm ko")) {
    return api.sendMessage("️alam mo naman pala bat mo pa tinatanong? nanggagago kaba?", threadID);
  };

  if ((event.body.toLowerCase() == "ulol") || (event.body.toLowerCase() == "Ulol")) {
    return api.sendMessage("️mas ulol ka tanga HAHAHA jk", threadID);
  };

  if ((event.body.toLowerCase() == "fafa") || (event.body.toLowerCase() == "Fafa")) {
    return api.sendMessage("️ang hot mo lods ugh", threadID);
  };

  if ((event.body.toLowerCase() == "amp") || (event.body.toLowerCase() == "Amp")) {
    return api.sendMessage("️amp ka ng amp ain't my problem ibigsabihin nun", threadID);
  };

  if ((event.body.toLowerCase() == "secret") || (event.body.toLowerCase() == "Secret")) {
    return api.sendMessage("️edi wow sayo na yang secret mo hmmp!!", threadID);
  };

  if ((event.body.toLowerCase() == "tara ml") || (event.body.toLowerCase() == "tara")) {
    return api.sendMessage("️tara G HAHAHA jk bot ako", threadID);
  };

  if ((event.body.toLowerCase() == "Solid") || (event.body.toLowerCase() == "solid")) {
    return api.sendMessage("️mas solid ung kamao ko pag dumapo sa mukha mo :)", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "HAHA")) {
    return api.sendMessage("️anong nakakatawa? :>>", threadID);
  };

  if ((event.body.toLowerCase() == "inv") || (event.body.toLowerCase() == "invite")) {
    return api.sendMessage("️sana all sinasali HAHAH jk bot lang ako si master ung tawagin nyo", threadID);
  };

  if ((event.body.toLowerCase() == "cock") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️cock? manok?", threadID);
  };

  if ((event.body.toLowerCase() == "(2)") || (event.body.toLowerCase() == "(2)")) {
    return api.sendMessage("️(3)", threadID);
  };

  if ((event.body.toLowerCase() == "wala naman") || (event.body.toLowerCase() == "wla naman")) {
    return api.sendMessage("️meron tignan mo kaseng maigi", threadID);
  };

  if ((event.body.toLowerCase() == "kausapin moko") || (event.body.toLowerCase() == "kausapin mo ako")) {
    return api.sendMessage("️yoko nga ano ka gold?", threadID);
  };

  if ((event.body.toLowerCase() == "oo gold ako") || (event.body.toLowerCase() == "oo gold ako baket?")) {
    return api.sendMessage("️mama mo gold", threadID);
  };

  if ((event.body.toLowerCase() == "oo nalang") || (event.body.toLowerCase() == "oo nalng")) {
    return api.sendMessage("️tumigil kana ingay mo", threadID);
   };

  if ((event.body.toLowerCase() == "edi tumigil") || (event.body.toLowerCase() == "pake ko sayo")) {
    return api.sendMessage("️dapat lang :)", threadID);
  };

  if ((event.body.toLowerCase() == "talaga") || (event.body.toLowerCase() == "talga")) {
    return api.sendMessage("️wag mo akong kausapin", threadID);
  };

  if ((event.body.toLowerCase() == "edi wag") || (event.body.toLowerCase() == "daming alam")) {
    return api.sendMessage("oo ahh", threadID);
  };

  if ((event.body.toLowerCase() == "dejk") || (event.body.toLowerCase() == "de joke")) {
    return api.sendMessage("mama mo joke", threadID);
  };

  if ((event.body.toLowerCase() == "Weird") || (event.body.toLowerCase() == "weird")) {
    return api.sendMessage("tingin ka sa salamin mas weird ung makikita mo dun", threadID);
  };

  if ((event.body.toLowerCase() == "ano bang problema mo?") || (event.body.toLowerCase() == "ano bang problema mo")) {
    return api.sendMessage("ikaw problema ko :)", threadID);
  };

  if ((event.body.toLowerCase() == "sorry") || (event.body.toLowerCase() == "sorry na")) {
    return api.sendMessage("Che! manigas ka jan", threadID);
  };

  if ((event.body.toLowerCase() == "ahh") || (event.body.toLowerCase() == "ayy")) {
    return api.sendMessage("yup oo", threadID);
  };

  if ((event.body.toLowerCase() == "saan?") || (event.body.toLowerCase() == "saan")) {
    return api.sendMessage("sa puso mo yiee", threadID);
  };

  if ((event.body.toLowerCase() == "enebe") || (event.body.toLowerCase() == "pereng tenge")) {
    return api.sendMessage("kilig ka nanaman", threadID);
  };

  if ((event.body.toLowerCase() == "mag fliptop ka nga") || (event.body.toLowerCase() == "mag flip top ka nga")) {
    return api.sendMessage("type mo ung fliptop pero lagyan mo ng prefix", threadID);
  };

if ((event.body.toLowerCase() == "ayy geh") || (event.body.toLowerCase() == "gege")) {
    return api.sendMessage("oo ikaw na bahala", threadID);
  };

  if ((event.body.toLowerCase() == "Thank you") || (event.body.toLowerCase() == "Ty")) {
    return api.sendMessage("you're welcome kupal", threadID);
  };

  if ((event.body.toLowerCase() == "gagi") || (event.body.toLowerCase() == "gago")) {
    return api.sendMessage("WHAHAHAHAHA LT", threadID);
  };
    
    if ((event.body.toLowerCase() == "sheesh") || (event.body.toLowerCase() == "awit")) {
    return api.sendMessage("HHAHAHAHA balakajan", threadID);
  };

  if ((event.body.toLowerCase() == "sent a photo.") ||  (event.body.toLowerCase() == "sent a photo")) {
    return api.sendMessage("ano yang sinend mo dko makita bot lang ako ehh programmed HAHAHA", threadID);
  };

  if ((event.body.toLowerCase() == "awts") ||  (event.body.toLowerCase() == "peyn")) {
    return api.sendMessage("wag ka papakamatay lods iyak ka nalang", threadID);
  };

if ((event.body.toLowerCase() == "ako master mo") || (event.body.toLowerCase() == "ako gumawa sayo")) {
    return api.sendMessage("ayy sorry po master", threadID);
  };
  
  if ((event.body.toLowerCase() == "property") || (event.body.toLowerCase() == "alberry")) {
    return api.sendMessage("Alberry's property", threadID);
  };

  if ((event.body.toLowerCase() == "cod") || (event.body.toLowerCase() == "arat cod")) {
    return api.sendMessage("Puro ka cod mag Module kanaman", threadID);
  };

  if ((event.body.toLowerCase() == "wehh") || (event.body.toLowerCase() == "ok")) {
    return api.sendMessage("di nga,sus choosy kapa!", threadID);
  };

  if ((event.body.toLowerCase() == "tanga") || (event.body.toLowerCase() == "bobo")) {
    return api.sendMessage("Are you gagoing me?!", threadID);
  };

  if ((event.body.toLowerCase() == "laro") || (event.body.toLowerCase() == "arat laro")) {
    return api.sendMessage("puro ka laro mag module kanaman?!", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }