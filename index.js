const Discord = require('discord.js');  // Call discord app 
let bot = new Discord.Client();
const AjCommand = require('./commands/aj_command');
const YzyCommand = require('./commands/yzy_command');


bot.login("NzI3NDc0ODgyMTM2NTA2NDE5.Xvtldw.ByuWZ11muLPgYmsCE_-keEBBuyY");


bot.on('ready', () => {
    console.log('I am ready!');
/*
    //add an avatar to the bot
    bot.user.setAvatar('./public/pictures/aio-bot-avis.jpg')
        .then(() => console.log('Avatar mis en place avec succès'))
        .catch(console.error);

    //current situation of the bot
    bot.user.setGame('detecting ...')
        .then(() => console.log('Avatar mis en place avec succès'))
        .catch(console.error);
*/
});

//send message to a new member
bot.on('guildMemberAdd', function(member){
    member.createDM.then(function (channel){
        return channel.send('Welcome to Sneakers channel'+member.displayName);
    }).catch(console.error);
})



bot.on('message', function (message) {

    if(String(message) === '!ajgetall'){
        AjCommand.parse(message);
    }else if (String(message) === '!yzygetall'){
        YzyCommand.parse(message);
    }

});

