const fs = require('fs');
const Discord = require("discord.js");
const prefix = '.';
const client = new Discord.Client({disableEveryone:true})
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/modules/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./src/modules/commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	client.user.setPresence({ game: { name: 'over Tama in js' , type: 'WATCHING' }, status: 'idle' })
    .catch(console.error);

	console.log(`${client.user.username} is online!`)
});



client.on('voiceStateUpdate', (oldMember, newMember) =>{
	//Change guild ID to corresponding server that needs it
	if (newMember.guild.id !== '404103946328866818' && newMember.guild.id !== '682403382257909815'){
		console.log("User is switching channel in guild: " + newMember.guild.name);
		return;}
	try {
		var newVoice = newMember.voiceChannel;
		var oldVoice = oldMember.voiceChannel;

		//if in voice channel
		if(newVoice !== undefined){
			//Assign role to user
			if (newMember.roles.find(r=> (r.name === "voice" || r.name === "Voice")) !== true){
				if (newMember.guild.id == '404103946328866818')
					newMember.addRole('474707295117508629');
				if (newMember.guild.id == "682403382257909815")
					newMember.addRole('686371566904147994');
			}
		}

		if(newVoice === undefined){
			//If user is leaving voice channel then remove the voice role
			if (newMember.guild.id == '404103946328866818'){newMember.removeRole('474707295117508629')}
			if (newMember.guild.id == "682403382257909815"){newMember.removeRole('686371566904147994')}
		}
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
