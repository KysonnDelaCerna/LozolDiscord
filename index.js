const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.author.id == 700390950832177242) {
        return;
    }

    if (message.content.toLowerCase().indexOf('refund') !== -1) {
        message.reply('we will consider it');
    }
    if (message.content.toLowerCase().indexOf('suspension') !== -1 || message.content.toLowerCase().indexOf('suspend') !== -1) {
        message.reply('sorry no suspension :(((');
    }
    if (message.content.indexOf('700390950832177242') !== -1 || message.content.toLowerCase().indexOf('lozol') !== -1 || message.content.toLowerCase().indexOf('la salle') !== -1 || message.content.toLowerCase().indexOf('dlsu') !== -1) {
       message.react('699509158248185856');
    }
});

client.login(process.env.token);
