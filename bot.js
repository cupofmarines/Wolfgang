const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjA5NjcwNjg4OTAyNzQyMDIw.XU99Jg.45FRaLvY8atAACkoLMBseshPgG8';

const PREFIX = '!';

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'migos':
            message.channel.sendMessage('AYE AYE SIR')
            break;
        case 'youtube':
            message.channel.sendMesssage('youtube.com')
            break;
        case 'info':
            if (args[1] === 'version'){
                message.channel.sendMessage('Version ' + version);
            }else{
                message.channel.sendMessage('Invalid Args')
            }
            break;
        case 'clear':
            if(!args[1]) return message.reply('error please define second arg')
            message.channel.bulkDelete(ars[1]);
            break;
        
            
    }
})

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'rally in':
            message.channel.sendMessage('')
            break;
        case 'youtube':
            message.channel.sendMesssage('youtube.com')
            break;
        case 'info':
            if (args[1] === 'version'){
                message.channel.sendMessage('Version ' + version);
            }else{
                message.channel.sendMessage('Invalid Args')
            }
            break;
        case 'clear':
            if(!args[1]) return message.reply('error please define second arg')
            message.channel.bulkDelete(ars[1]);
            break;
        
            
    }
})

bot.on('message', message=>{

let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'rally-1-rank':
            message.channel.sendMessage('@founder THATS YOU SIR')
            break;
        case 'rally-2-rank':
            message.channel.sendMesssage('@MAJOR RALLY')
            break;
        case 'rally-3-rank':
            message.channel.sendMesssage('@SECOND-mAJOR RALLY')
            break;
        case 'brian':
            if(!message.member.roles.find(r => r.name === "Founder")  || !message.member.roles.find(r => r.name ==="Lieutenant")  || !message.member.roles.find(r => r.name === "Second-Major"))       
            message.reply('SIR YES SIR')
            break;                        
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "hello brian"){
        msg.reply('HELLO SIR'); 
    
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "state yourself brian"){
        msg.reply('VERY MAGNIFICENT SIR');
    }
})

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('super mario', { type: 'STREAMING'}).catch(console.error);

})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "Welcome!");
    if(!channel) return;

    channel.send('Welcome to our server, ${member}, please read the rules in the rules channel!')
});



bot.login(process.env.BOT_TOKEN);
