// CORE
const Discord = require("discord.js");
const client = new Discord.Client();
const token = "ODM3MDU1OTMwNjkyMDA5OTk1.YIm_FQ.ShoMTZHhn-B4-JOKe6ynbV-jtd0";

// CORE COMMANDS
const prefix = "!";

// REMINDERS
var reminderDelay = 24 * 60 * 60 * 1000; // hours in a day * minutes in an hour * seconds in a minute * milliseconds in a second
var reminderChannel;
var reminderArray = [];
let reminder = new Reminder("Test", 5000, '243459418744815627');

// LOGIN
client.login(token);

// READY EVENT
client.on("ready", () => {
  console.log("NOTE: Logged in as Butch! Bot ready.");
  client.user.setActivity(" Baseili", { type: "WATCHING" });

  console.log("TASK: Fetching member cache...");
  client.guilds.fetch("642796636354904074").then((guild) => {
    guild.members.fetch().then((members) => {
      console.log("-START MEMBER CACHING-");
      members.forEach((member) => {
        console.log(member.displayName);
      });
      
      console.log("-END MEMBER CACHING-");
      console.log("COMPLETE: Member caching complete.");
    }).catch(console.error);
  }).catch(console.error);

  console.log("TASK: Fetching channel ID for reminder messages...");
  // 833107676899966996 - The-Turing-Test on Ferrum
  reminderChannel = client.channels.cache.get('833107676899966996');
  console.log("COMPLETE: Reminder channel bound to " + reminderChannel.name);


  console.log("TASK: Setting interval for message pings.");
  // REMINDER INTERVAL TIMING
  setInterval(() => {
    reminderChannel.send();
  }, reminderDelay);
});

// MESSAGE EVENT
client.on("message", (message) => {
  // Check for prefix and self
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  switch (command) {
    case "wassup":
      switch (getRandomInt(1, 4)) {
        case 1:
          message.reply("Orite blud!");
          break;

        case 2:
          message.reply("Ere lad!");
          break;

        case 3:
          message.reply("Wassup m8!");
          break;

        case 4:
          message.reply("Braaaaaaaaaap!");
          break;
      }
      break;

    // Set the timer
    case "setTimer".toLowerCase():
      // setTimer reminderName number type
      // eg setTimer remindAl 1 hour
      break;

    case "reminder".toLowerCase():
      // getReminder reminderName
      // Displays class values
      // eg Reminder Name: annoyAlex, Delay: 24 hours, Message: REMINDER FOR ALEX
      break;

    case "addGame".toLowerCase():

      break;

    case "victimiseAl".toLowerCase():
      message.guild.members.fetch("227885873130242049").then((member) => {
        message.channel.send("Twat, " + "<@" + member.id + ">");
      });
      break;

    case "victimise":
      if (args.length == 0) {
        message.reply(
          "Ey up, you're missing the twat you want me to victimise!"
        );
        break;
      }

      let User = client.users.cache.find(
        (User) => User.username.toLowerCase() == args[0]
      );
      if (!User) {
        message.reply("Couldn't find the twat, soz m8.");
      } else {
        message.channel.send("Twat, " + "<@" + User.id + ">");
      }
      break;
  }
});

// NON-EVENT FUNCTIONS
function Remind() {
  // Spawn new interval-function
  // Set reminder time
  // Set reminder info
  // Execute
}

function SetReminder(name, interval, target)
{

}

function RemoveReminder(name)
{

}

// HELPER FUNCTIONS
/// Gets a random integer, both min and max are inclusive.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}
