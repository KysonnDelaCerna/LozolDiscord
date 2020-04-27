const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = 'lozol';

client.on('message', message => {
    if (message.author.id == 700390950832177242) {
        return;
    }

    if (message.content.toLowerCase().indexOf('refund') !== -1) {
        message.channel.send(`> ${message.content}\n<@${message.author.id}> we will consider it`);
    }
    if (message.content.toLowerCase().indexOf('suspension') !== -1 || message.content.toLowerCase().indexOf('suspend') !== -1) {
        message.channel.send(`> ${message.content}\n<@${message.author.id}> sorry no suspension :(((`);
    }
    if (message.content.toLowerCase().indexOf('money') !== -1 || message.content.toLowerCase().indexOf('cash') !== -1) {
        message.channel.send(`> ${message.content}\n<@${message.author.id}> I like money`);
    }
    if (message.content.indexOf('700390950832177242') !== -1 || message.content.toLowerCase().indexOf('lozol') !== -1 || message.content.toLowerCase().indexOf('la salle') !== -1 || message.content.toLowerCase().indexOf('dlsu') !== -1 || message.content.toLowerCase().indexOf('lasalle') !== -1) {
       message.react('699509158248185856');
    }
    if (message.content.toLowerCase().indexOf('up') !== -1 || message.content.toLowerCase().indexOf('ateneo') !== -1 || message.content.toLowerCase().indexOf('areneo') !== -1 || message.content.toLowerCase().indexOf('admu') !== -1 || message.content.toLowerCase().indexOf('ust') !== -1) {
        message.react('🇬').then(message.react('🇦')).then(message.react('🇾'));
    }

    if (message.content.toLowerCase() === `${PREFIX} pull`) {
        for (let i = 0; i < 10; i++) {
            message.channel.send('$m');
        }
    }
});

client.login(process.env.token);
