const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`صيآنة`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});









client.on('ready', function(){    
    var ms = 40000 ;    
    var setGame = ['Made By Mdax','xR1'];    
    var i = -1;    
    var j = 0;    
    setInterval(function (){    
        if( i == -1 ){    
j = 1;    
       }    
        if( i == (setGame.length)-1 ){    
            j = -1;    
      }    
       i = i+j;    
        client.user.setGame(setGame[i],`https://www.youtube.com/watch?v=3ACCwbLHXc4`);    
}, ms);    
    
});





client.on('message', msg => {
  if (msg.content === 'السعودية') {      
    msg.react("🇸🇦")
    msg.channel.send("🇸🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'مصر') {      
    msg.react("🇪🇬")
    msg.channel.send("🇪🇬")
  }
});

client.on('message', msg => {
  if (msg.content === 'المغرب') {      
    msg.react("🇲🇦")
    msg.channel.send("🇲🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'العراق') {      
    msg.react("🇮🇶")
    msg.channel.send("🇮🇶")
  }
});

client.on('message', msg => {
  if (msg.content === 'الجزائر') {      
    msg.react("🇩🇿")
    msg.channel.send("🇩🇿")
  }
});

client.on('message', msg => {
  if (msg.content === 'الامارات') {      
    msg.react("🇦🇪")
    msg.channel.send("🇦🇪")
  }
});

client.on('message', msg => {
  if (msg.content === 'تونس') {      
    msg.react("🇹🇳")
    msg.channel.send("🇹🇳")
  }
});

client.on('message', msg => {
  if (msg.content === 'سوريا') {      
    msg.react("🇸🇾")
    msg.channel.send("🇸🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'ليبيا') {      
    msg.react("🇱🇾")
    msg.channel.send("🇱🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'قطر') {      
    msg.react("🇶🇦")
    msg.channel.send("🇶🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'الصومال') {      
    msg.react("🇸🇴")
    msg.channel.send("🇸🇴")
  }
});

client.on('message', msg => {
  if (msg.content === 'عمان') {      
    msg.react("🇴🇲")
    msg.channel.send("🇴🇲")
  }
});

client.on('message', msg => {
  if (msg.content === 'موريتانيا') {      
    msg.react("🇲🇷")
    msg.channel.send("🇲🇷")
  }
});

client.on('message', message => {
if (message.content.startsWith('السلام عليكم')){
     let ra3d = new Discord.RichEmbed()
  .setColor("#e9ab26")
  .setDescription("**وعليكم السلام ورحمة الله وبركاتة**")
     
     
  message.channel.sendEmbed(ra3d);
    }
});




var math = require('mathjs') // npm i mathjs
client.on("message", async msg => {

    if (msg.channel.type !== "text") return undefined;

    //if (msg.auhtor.bot) return undefined;

    var args = msg.content.split(" ")

    var prefix = "$"

  if (msg.content.toLowerCase().startsWith(prefix + "math")) {

    if (!args[1]) return msg.channel.send("DiscordAPI Err : Missing args.")

    if (args[1].length == 1) return msg.channel.send("JUST ONE NUMBER?????");

    var count = parseInt(args[1]);

    if (isNaN(count)) return msg.channel.send('No nigga');

    try {
      idk = await math.eval(args[1])
    } catch (e) {
      return msg.channel.send("ERRRRRRRRRRRRRRRRRRRRRRRR")
    }
    await msg.channel.send(idk)
  }
});
	


	

const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith('$sara7a')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()
 
  message.channel.sendEmbed(client);
  message.react("??")
}
});



const bannedwords = [
    "كل زق",
    "كس",
    "كس امك",
    "الله يلعن",
    "قحبه",
    "خنيث"

  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" احترم نفسك , يمنع الشتم في خادمنا او سوف تتعرض الي  ميوت ").then(msg => {msg.delete(5000)});;
  };
});



client.on('message', message => {
 
    if(message.content === prefix + "mutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
 
           }).then(() => {
               message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
           });
             }
//FIRE BOT
 if(message.content === prefix + "unmutechannel") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
 
           }).then(() => {
               message.reply("**__تم فتح الشات__:white_check_mark:**")
           });
             }
             
     
   
});



             
     
client.on('message' , message => {
if (message.content === '$help') {
           if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
         let embed = new Discord.RichEmbed()

      .setThumbnail(message.author.avatarURL)    
      .addField("**۩ஜ▬▬▬▬▬▬✦ أوامر البوت ✦▬▬▬▬▬▬ஜ۩**","** **")
      .addField("**❖ $mute <Mention> <reason>**","**لإعطاء الشخص ميوت**")
      .addField("**❖ $unmute <Mention>**","**لفك الميوت **")
      .addField("**❖ $clear [عددالرسائل]<Mention>**","**لمسح عدد معين من الرسائل **")
      .addField("**❖ $kick <Mention>**","**مخصص لطرد شخص من روم صوتي**")
      .addField("**❖ $bc <Message> **","**لأرسال البرودكاست**")
      .addField("**❖ $mutechannel**","**لتقفيل الشات**")
      .addField("**❖ $unmutechannel**","**لفتح الشات بعد تقفيله**")
     .addField("**❖ $botinfo**","**لمعرفة معلومات البوت**")
      .addField("**❖ $profile**","**معلومات شخصيه**")

      .addField("**۩ஜ▬▬▬▬▬▬✦أوامر الالعاب✦▬▬▬▬▬▬ஜ۩**","** **")
      .addField("**❖ $sara7a**","**لعبة صراحه**")
      .addField("**❖ $rps**","**لعبة حجرة ورقة مقص**")
      .addField("**❖ $[Soon]**","**لعبة كت  تويت**")
      .addField("**۩ஜ▬▬▬▬▬▬✦Info✦▬▬▬▬▬▬ஜ۩**","** **")
      .addField("**❖ --->**","**Made By : ! - Mdax .#0518**")
      .addField("**❖ --->**","**Bot Server :https://discord.gg/Y9x7zqe**")

    .setColor('#e9ab26')
  message.author.sendEmbed(embed);
    }
});

client.on('message', message => {
    let args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + 'clear')) {
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if (!messagecount) return message.reply("**💡 || أختر كميه الرسائل المراد مسحها .**").then(messages => messages.delete(5000))
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });

         
     
var antispam = require("anti-spam");//npm i anti-spam
 
antispam(client, {
  warnBuffer: 3, //الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على تحذير.
  maxBuffer: 5, // الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على ميوت.
  interval: 1000, // مقدار الوقت قبل حصول باند
  warningMessage: "stop spamming.", // رسالة تحذير اذا سوا سبام!
  roleMessage: "Muted!!", // الرسالة الي تجي اذا شخص اخذ ميوت
  roleName: "Muted", // اسم رتبة الميوت
  maxDuplicatesWarning: 7, // عدد الرسايل الي قبل التحذيرات
  maxDuplicatesBan: 10, // عدد الرسايل الي يقدر المستخدم يرسلها قبل الميوت
  time: 200, // عدد الوقت الي يجلس لين تسحب رتبة الميوت من الشخص الحسبة برمجية وليست كتابية 
});




//mute
client.on("message", message => {
    if (message.author.bot) return;
   
    let command = message.content.split(" ")[0];
   
    if (command === prefix + "mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("**⚠ | `[MANAGE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("**`'Muted'`لا توجد رتبة** \n Muted سوي رتبة ").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('**.mute <منشن الشخص> **').catch(console.error);
   
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** :cry: `Manage Roles` لا يوجد لدي برمشن**').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:mute: تم إعطاء العضو ميوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: تم إعطاء العضو ميوت كتابي**").catch(console.error);
  });
    }
  };
  });
 
  
 
 client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});

 client.on("message", message => {

            if (message.content.startsWith(prefix + "bc2")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
 
 
 
 
 
 


client.on("message", function(message) {
    var prefix = "$";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)
    .addField("Scissors","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' 🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
       
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})
 
    })
}
});






client.on('message', message => {
if (message.content.startsWith("ban$")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء باند الى : " + mention.tag);
};
});

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var stewart = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('``رساله جديده في خاص البوت``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("501121173598371844").send({ embed: stewart });
    }
});


client.on('message', message => {
    let prefix = '$';
    
    if(message.content.startsWith(prefix + 'getid')) {
        let mentionned = message.mentions.users.first();
            if(mentionned) {
                var c = mentionned;
            } else {
                var c = message.author;
            }
                let embed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setTitle(`**[ ${c.id} ]**`);

                    message.channel.sendEmbed(embed);

    }
});




   client.on('guildMemberAdd', member => {
   if(member.presence.status === 'offline') {
       member.guild.owner.send(`:eyes: في واحد دخل السيرفر ومسوي نفسه غامض اوفلاين `)
}
});
client.on('guildMemberRemove', member => {
   if(member.presence.status === 'offline') {
       member.guild.owner.send(`في واحد خرج من سيرفرك وهو مسوي نفسه غامض اوف لاين :eyes: `)
}
});





client.on('message', async message =>{
  var prefix = "$";
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**I LOve Mdax77x`');
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK : false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
 
    await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
 
 
 
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
 
  return;
 
  }
 
});




   




  

client.on('message', message => {
if (message.content.startsWith(`${prefix}info`)) {
message.channel.send({
embed: new Discord.RichEmbed()
   .setAuthor(client.user.username,client.user.avatarURL)
   .setThumbnail(client.user.avatarURL)
   .setColor('RANDOM')
   .setTitle('``xR1`` ')
   .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
   .addField('``servers``', [client.guilds.size], true)
   .addField('``channels``' , `[ ${client.channels.size} ]` , true)
   .addField('``Users``' ,`[ ${client.users.size} ]` , true)
   .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
   .addField('``My ID``' , `[ ${client.user.id} ]` , true)
         .addField('``My Prefix``' , `[ prefix ]` , true)
         .addField('``My Language``' , `[ JavaScript ]` , true)
         .addField('``Bot Version``' , `[ v0.1 ]` , true)
         .setFooter('By | <@335484868479811584 >')
})
}
});






client.on('message', message => {
if (message.content.startsWith(`${prefix}botinfo`)) {
message.channel.send({
embed: new Discord.RichEmbed()
   .setAuthor(client.user.username,client.user.avatarURL)
   .setThumbnail(client.user.avatarURL)
   .setColor('RANDOM')
   .setTitle('``xR1`` ')
   .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
   .addField('``servers``', [client.guilds.size], true)
   .addField('``channels``' , `[ ${client.channels.size} ]` , true)
   .addField('``Users``' ,`[ ${client.users.size} ]` , true)
   .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
   .addField('``My ID``' , `[ ${client.user.id} ]` , true)
         .addField('``My Prefix``' , `[ $ ]` , true)
         .addField('``My Language``' , `[ JavaScript ]` , true)
         .addField('``Bot Version``' , `[ v0.1 ]` , true)
         .setFooter('By | <@! - Mdax .#0518 >')
})
}
});




client.on('message', message => {
const prefix = "$";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**البوت لايمتلك صلاحيات**").then(msg => msg.delete(3000));
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
 
  if (message.mentions.users.size < 1) return message.reply("منشن الشخص").then(msg => msg.delete(3000));
  if(!reason) return message.reply ("اكتب سبب الطرد");
  if (!message.guild.member(user)
  .bannable) return message.reply("لايمكنني طرد شخص أعلى من رتبتي").then(msg => msg.delete(3000));
 
  message.guild.member(user).kick(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked', user.displayAvatarURL)
  .setColor("#e9ab26")
  .addField("**:busts_in_silhouette: المطرود**",  `**( ${user} )**`)
  .addField("**:hammer:  تم بواسطة **", `**( ${message.author.tag} )**`)
  .addField("**:book: السبب**", `**( ${reason} )**`)
  client.channels.get("492467606129737728").send({embed : banembed})
}
});    



  client.on("message", msg => {
    var prefix = "$";
if(msg.content.startsWith (prefix + "profile")) {
if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});




var math = require('mathjs') // npm i mathjs
client.on("message", async msg => {

    if (msg.channel.type !== "text") return undefined;

    //if (msg.auhtor.bot) return undefined;

    var args = msg.content.split(" ")

    var prefix = "$"

  if (msg.content.toLowerCase().startsWith(prefix + "math")) {

    if (!args[1]) return msg.channel.send("DiscordAPI Err : Missing args.")

    if (args[1].length == 1) return msg.channel.send("JUST ONE NUMBER?????");

    var count = parseInt(args[1]);

    if (isNaN(count)) return msg.channel.send('No nigga');

    try {
      idk = await math.eval(args[1])
    } catch (e) {
      return msg.channel.send("Eror 404")
    }
    await msg.channel.send(idk)
  }
});

client.login(process.env.BOT_TOKEN);

