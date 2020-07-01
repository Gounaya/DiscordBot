const Command = require('./command');

module.exports = class AjCommand extends Command{

    static match (message) {
        console.log("match -->ajgetall");
        return message.content.startsWith('!ajgetall');
    }

    static action (message) {
        console.log("action -->ajgetall");
        let args = message.content;
        args = args.substr(1);
        message.delete();
        message.reply('😄👟 Command --> '+args);
    }
}