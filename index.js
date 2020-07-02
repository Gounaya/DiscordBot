const Discord = require('discord.js');  // Call discord app 
let bot = new Discord.Client();
const AjCommand = require('./commands/aj_command');
const YzyCommand = require('./commands/yzy_command');
const asosdata = require('./data/asos_data');
const fetch = require('node-fetch');

const url = 'https://www.asos.com/api/product/search/v2/categories/17184?brand=14269&channel=desktop-web&country=FR&currency=EUR&keyStoreDataversion=j42uv2x-26&lang=fr-FR&limit=72&offset=0&rowlength=4&store=FR';


//bot.login("NzI3NDc0ODgyMTM2NTA2NDE5.XvxALQ.ql8EqIZ0_coITEc5bxZ8edquD7g");


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
    }else if (String(message) === 'asos'){
        console.log("asos ==> ");
        asosdata.run(bot, message);
    }
});

