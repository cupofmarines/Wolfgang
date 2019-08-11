const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjA5NjY0MTk3NzU1NjY2NDM4.XU6kdw.PkVDQ-lZNgXSZbS5_kRe_PH0CzA';

const PREFIX = '!';

bot.on('message', msg=>{
    if(msg.content ===  "hello brian"){
        msg.reply('YES SIR');
    }
})

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('Youtube', { type: 'STREAMING'}).catch(console.error);

})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "Welcome!");
    if(!channel) return;

    channel.send('Welcome to our server, ${member}, please read the rules in the rules channel!')
});

bot.login(token);
