const Discord = require('discord.js');  // Call discord app 
let bot = new Discord.Client();

bot.login("NzI3NDc0ODgyMTM2NTA2NDE5.XvsaXw.RLnRNMfd8lpSffr2m4v6RyN7w-s");


bot.on('ready', () => {
    console.log('I am ready!');
});


bot.on('message', function (message) {
    if (message.content === '!ping') {
        message.channel.send('pong')
    }
});

