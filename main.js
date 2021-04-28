const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
    console.log("Logged in as Butch!");
    client.user.setActivity(" Baseili", {type: "WATCHING"});

    client.guilds.fetch('642796636354904074').then((guild) => 
    {
        guild.members.fetch().then((members) => 
        {
            members.forEach((member) =>
            {
                console.log(member.displayName);
            });
        });
    });
});

client.on('message', message =>
{

    // Check for prefix and self
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();


switch (command)
{
    case 'ping':
        message.reply("Pong!");

        break;

    case 'victimiseal':
        message.guild.members.fetch('227885873130242049')
        .then(member =>
        {
            message.channel.send("Twat, " + "<@" + member.id + ">");
        });
        break;

    case 'victimise':
        if (args.length == 0)
        {
            message.reply("Ey up, you're missing the twat you want me to victimise!");
            break;
        }
        
        let User = client.users.cache.find(User => User.username.toLowerCase() == args[0]);
        if (!User)
        {
            message.reply("Couldn't find the twat, soz m8.");
        }
        else
        {
            message.channel.send("Twat, " + "<@" + User.id + ">");
        }

        //var matching_client = client.users.cache.find(user => user.username === args[0]);

        //message.reply(matching_client.username);
        //message.reply("Couldn't find the twat, soz m8.");
        break;

    case 'remind':
        break;

    case 'update':
        break;

    case 'args':

        message.reply(args.length.toString());
        break;

}
});

client.login('ODM3MDU1OTMwNjkyMDA5OTk1.YIm_FQ.ShoMTZHhn-B4-JOKe6ynbV-jtd0');
