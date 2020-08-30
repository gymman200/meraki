const {Client, MessageEmbed} = require('discord.js');
const bot = new Client();
 
const token = 'NzM3NzYxNzIxMjE2NjYzNTUz.XyCEJQ.jDLXte3MtaZ6iBD5sg4wa5CpIfU';
 
const PREFIX = ';';
 
 
bot.on('ready', () => {
    console.log('This bot is active!');
})
 
bot.on('message', msg =>{
    if(msg.content === ";help"){
        msg.reply("check your dms! <3");
    }
})

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(channels => channel.name === "welcome");
    if(!channel) return;

    channel.send(`Welcome to Meraki, ${member}! If you have any questions please feel free to ask someone. :blue_orca:`)
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    
 
    switch (args[0]) { 
        case 'help':
            const Embed = new MessageEmbed()
            .setTitle("help information")
            .setColor('ffdab9')
            .setDescription("coming soon");
 
            message.author.send(Embed);
            message.author.send("If you have any other concerns regarding cupid's garden, please either contact one of our high ranks or support team. our whole entire staff team wishes you the best experience possible, so thanks for joining cupid's garden!")
        break;
    }
 
 
});
 
            
                        
bot.login(token);
