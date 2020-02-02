const help =
    `
\`\`\`css
[Muto Bot - v0.2]

@Parameters (required), [optional];

General:
    .help                  Shows help for the Bot
    .cap                   Shows capping information
    .train  (level)        Displays good areas to level
\`\`\`
`;
module.exports = {
	name: 'help',
	description: 'Provides information about the bot',
    aliases: ['h', 'help'],
	execute(message) {

		message.author.send(help);
	},
};
