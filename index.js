const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('message', message => {
    if (message.author.id == 700390950832177242) {
        return;
    }

    if (message.content.toLowerCase().indexOf('refund') !== -1) {
        message.reply('sorry no refunds :(((');
    }
    else if (message.content.toLowerCase().indexOf('suspension') !== -1 || message.content.toLowerCase().indexOf('suspend') !== -1) {
        message.reply('sorry no suspension :(((');
    }
    else if (message.content.indexOf('700390950832177242') !== -1) {
        message.reply('sorry no refunds and no suspension :((((((((');
    }
});

client.login(token);
