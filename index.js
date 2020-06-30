const Discord = require('discord.js');  // Call discord app 
let bot = new Discord.Client();

bot.login("NzI3NDc0ODgyMTM2NTA2NDE5.XvtHUw.nxmmkiRPFDQl0rsLRYtEwQuQHF0");


bot.on('ready', () => {
    console.log('I am ready!');
    bot.user.setAvatar('./public/pictures/aio-bot-avis.jpg')
        .then(() => console.log('Avatar mis en place avec succès'))
        .catch(console.error)
    bot.user.setGame('detecting ...')
        .then(() => console.log('Avatar mis en place avec succès'))
        .catch(console.error)
});


bot.on('message', function (message) {
    if (message.content === '!ping') {
        message.channel.send('pong')
    }
});

