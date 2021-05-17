// CORE
//const Reminder = r('reminder.js');
const Discord = require("discord.js");
const client = new Discord.Client();
const token = "ODM3MDU1OTMwNjkyMDA5OTk1.YIm_FQ.ShoMTZHhn-B4-JOKe6ynbV-jtd0";
const Ferrum = "642796636354904074";

// CORE COMMANDS
const prefix = "!";

// CLASSES
// Stored reminders
class Reminder 
{
  constructor(reminderName, intervalMins, setFor, setBy) 
  {
    this.reminderName = reminderName;
    this.intervalMins = intervalMins;
    this.setFor = setFor;
    this.setBy = setBy;
  }
}

// Stored games
class Game 
{
  constructor(gameName, setBy) 
  {
    this.gameName = gameName;
    this.setBy = setBy;
  }
}

// REMINDERS
var reminderDelay = 24 * 60; // hours in a day * minutes in an hour
var reminderChannel;
var reminderArray = [];
let reminder = new Reminder("Test", reminderDelay, "243459418744815627", "243459418744815627");
reminderArray.push(reminder);

// LOGIN
client.login(token);

// READY EVENT
client.on("ready", () => 
{
  console.log("NOTE: Logged in as Butch! Bot ready.");

  // SET STATUS
  client.user.setActivity(" Baseili", { type: "WATCHING" });

  // CACHE MEMBERS
  client.guilds.fetch(Ferrum).then((guild) => {
    guild.members.fetch().then((members) => {
      console.log("-START MEMBER CACHING-");
      members.forEach((member) => {
        console.log(member.displayName + " : " + member.id);
      });
      
      console.log("-END MEMBER CACHING-");
      console.log("COMPLETE: Member caching complete.");
    }).catch(console.error);
  }).catch(console.error);

  // BIND OUTPUT CHANNEL
  console.log("TASK: Fetching channel ID for reminder messages...");
  // 833107676899966996 - The-Turing-Test on Ferrum
  reminderChannel = client.channels.cache.get('833107676899966996');
  console.log("COMPLETE: Reminder channel bound to " + reminderChannel.name);
});

// MESSAGE EVENT
client.on("message", (message) => 
{
  // Check for prefix and self
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  switch (command) 
  {
    // GENERAL RESPONSES
    case "wassup":
      switch (getRandomInt(1, 4)) 
      {
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

    // REMINDERS
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

    case "listReminders".toLowerCase():
      var reminderStr = "";

      // Get member cache
      let members = message.guild.members.cache;

      // For each reminder in the list
      reminderArray.forEach((reminder) => 
      {
        // Filter the cache for the given member ID
        let setForFiltered = members.filter(member => member.user.id === reminder.setFor);
        var setForMember = setForFiltered.get(reminder.setFor).displayName;

        // Filter the cache for the given member ID
        let setByFiltered = members.filter(member => member.id === reminder.setBy);
        var setByMember = setByFiltered.get(reminder.setBy).displayName;
        
        // Construct reminder string
        reminderStr += "Name: " + reminder.reminderName + "\n" +
         "Interval: " + reminder.intervalInMins + "mins\n" + 
         "For: " + setForMember + "\n" + 
         "By: " + setByMember + "\n";
      }); 

      message.channel.send(reminderStr);
      break;

    // GAMES
    case "addGame".toLowerCase():

      break;

    case "removeGame".toLowerCase():

      break;
      
    // VICTIMISE
    case "victimiseAl".toLowerCase():

      // Check guild for member ID
      message.guild.members("227885873130242049").then((member) => {
        message.channel.send("Twat, " + "<@" + member.id + ">"); // Send mention
      });
      break;

    case "victimise":
      // Length check
      if (args.length == 0) 
      {
        message.reply(
          "Ey up, you're missing the twat you want me to victimise!"
        );
        break;
      } 

      // Find user in cache
      let User = client.users.cache.find
      (
        (User) => User.username.toLowerCase() == args[0]
      ); 

      // If we couldn't find the user
      if (!User) 
      {
        message.reply("Couldn't find the twat, soz m8.");
      } 
      // else send the mention
      else 
      {
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

// HELPER FUNCTIONS
/// Gets a random integer, both min and max are inclusive.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}
