const fs = require('fs');
const Discord = require("discord.js");
const token = '.';
const client = new Discord.Client({disableEveryone:true})
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/modules/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./src/modules/commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log(`${client.user.username} is online!`)
});

client.on('voiceStateUpdate', (oldMember, newMember) =>{
	//Change guild ID to corresponding server that needs it
	if (newMember.guild !== '672937907824230410'){return;}
	try {
		var newVoice = newMember.voiceChannel;
		var oldVoice = oldMember.voiceChannel;

		//if in voice channel
		if(newVoice !== undefined){
			//Assign role to user
			if (newMember.roles.find(r=> r.name === "voice") != true){
				newMember.addRole('672970205068132352');
			}
		}

		if(newVoice === undefined){
			//If user is leaving voice channel then remove the voice role
			newMember.removeRole('672970205068132352')
		}
	} catch (error) {
		console.error(error);
	}
});
client.on('message', message => {
	//Custom command reading
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);

	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});


client.login(process.env.discord);
