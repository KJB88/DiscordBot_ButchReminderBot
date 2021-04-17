const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
    console.log("Logged in as Butch!");
    client.user.setActivity(" Baseili", {type: "WATCHING"});
});

client.on('message', message =>
{

    // Check for prefix and self
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split('/');
const command = args.shift().toLowerCase();

switch (command)
{
    case 'ping':
        message.reply("Pong!");
        break;

    case 'victimise':
        message.guild.members.fetch('227885873130242049')
        .then(member =>
        {
            message.channel.send("Twat, " + "<@" + member.id + ">");
        });
        break;

    case 'remind':
        break;

    case 'update':
        break;

}
});

client.login('ODMzMDkyMTg2NDg4MTc2NzAw.YHtTjw.a5U1B_2-6IngVJi4JR3QkSse_hk');
