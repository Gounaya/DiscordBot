const Command = require('./command');

module.exports = class YzyCommand extends Command{

    static match (message) {
        console.log("match -->yzygetall");
        return message.content.startsWith('!yzygetall');
    }

    static action (message) {
        console.log("action -->yzygetall");
        let args = message.content;
        args = args.substr(1);
        message.delete();
        message.reply('😄👟 Command --> '+args);
    }
}