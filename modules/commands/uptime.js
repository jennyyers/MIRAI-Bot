module.exports.config = {
	name: "uptime",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "uptime",
	commandCategory: "system",
	cooldowns: 2,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":"",
    "pidusage": ""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {

  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  const pidusage = await global.nodemodule["pidusage"](process.pid);
	const moment = require("moment-timezone");
    var juswaa = ['The world isnt perfect. But its there for us, doing the best it can… thats what makes it so damn beautiful. — Roy Mustang (Full Metal Alchemist)', 'To know sorrow is not terrifying. What is terrifying is to know you cant go back to happiness you could have. — Matsumoto Rangiku (Bleach)', 'We are all like fireworks: We climb, we shine and always go our separate ways and become further apart. But even when that time comes, lets not disappear like a firework and continue to shine… forever. — Hitsugaya Toshiro (Bleach)', 'Those who stand at the top determine what’s wrong and whats right! This very place is neutral ground! Justice will prevail, you say? But, of course, it will! Whoever wins this war becomes justice! — Don Quixote Doflamingo (One Piece)', 'Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder. — Gildarts Clive (Fairy Tail)', 'Whatever you lose, youll find it again. But what you throw away you’ll never get back. — Kenshin Himura (Rurouni Kenshin: Meiji Kenkaku Romantan)', 'Fear is freedom! Subjugation is liberation! Contradiction is truth! Those are the facts of this world! And you will all surrender to them, you pigs in human clothing! — Satsuki Kiryuuin (Kill la Kill)', 'I am the hope of the universe. I am the answer to all living things that cry out for peace. I am protector of the innocent. I am the light in the darkness. I am truth. Ally to good! Nightmare to you! — Son Goku (Dragon Ball Z)', 'Religion, ideology, resources, land, spite, love or just because no matter how pathetic the reason, its enough to start war. War will never cease to exist… reasons can be thought up after the fact. Human nature pursues strife. — Paine (Naruto Shippuden)', 'People, who cant throw something important away, can never hope to change anything. — Armin Arlert (Shingeki no Kyojin / Attack on Titan)', 'A person can change, at the moment when the person wishes to change. — Haruhi Fujioka (Ouran Highschool Host Club)', 'What good are dreams, if all you do is work? Theres more to life than hitting the books, I hope you know. — Tamaki Suou (Ouran Highschool Host Club)', 'If you don’t take risks, you can’t create a future! — Monkey D. Luffy (One Piece)', 'When you give up, thats when the game ends. — Mitsuyoshi Anzai (Slam Dunk)', 'What good are dreams, if all you do is work? There’s more to life than hitting the books, I hope you know. — Tamaki Suou (Ouran Highschool Host Club)'];
   var tle = juswaa[Math.floor(Math.random() * juswaa.length)];
    var juswa = moment.tz("Asia/Manila").format("»D/MM/YYYY HH:mm:ss«");
	const timeStart = Date.now();
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link = ["https://i.imgur.com/dXkao0N.gif",
"https://i.imgur.com/rfOuWAJ.gif"];
var callback = () => api.sendMessage({body:`Today is: ${juswa}\nBot is up and running ${hours} : ${minutes} : ${seconds}\nPrefix: ${global.config.PREFIX}\nBot Name: ${global.config.BOTNAME}\nTotal users: ${global.data.allUserID.length}\nTotal Group: ${global.data.allThreadID.length}\nAdmin Facebook: https://www.facebook.com/profile.php?id=10007533502441\nHere are some anime quotes\n———————\n»${tle}«\n———————`,attachment: fs.createReadStream(__dirname + "/cache/juswa.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.gif")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.gif")).on("close",() => callback());
   };