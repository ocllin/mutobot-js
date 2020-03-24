const help =
    `
\`\`\`css
[Muto Bot - v0.31]

@Parameters (required), [optional];

General:
    .help                  Shows help for the Bot
    .cap                   Shows capping information
    .train  (level)        Displays good areas to level
    .stamp (string)        Converts text to Discord emojis
    .flagrace              Shows future flag race events
\`\`\`
`;
module.exports = {
	name: 'help',
	description: 'Provides information about the bot',
    aliases: ['h', 'help'],
	execute(message) {
        message.channel.send("I've sent you a DM, @" + message.author.id);
		message.author.send(help);
	},
};
