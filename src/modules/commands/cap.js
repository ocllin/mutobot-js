const cap =
    `
\`\`\`css
[ Capping ]
------------
Capping is essential for Tama to grow into a real guild.
You can cap simply by going to Ch 18 during reset time and finding
a party that is capping, or ask others yourself in guild chat.
Root Abyss is the most common way to start capping. Most people run:
Crimson Queen --> Pierre --> VonBon --> Vellum --> NMagnus/CHT
---------------------------------------------------------------
This can help our guild grow, as well as help you get your 10 RA runs!
\`\`\`
`;
module.exports = {
	name: 'cap',
	description: 'Provides information about capping',
    aliases: ['cap', 'capping'],
	execute(message) {
		message.channel.send(cap);
	},
};
