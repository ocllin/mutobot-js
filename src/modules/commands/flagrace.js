const flag =
    `
\`\`\`css
[Flag Race]
Flag race is a guild event that occurs at multiple times during the day

UTC: 12PM, 7PM, 9PM, 10PM, 11PM
EDT: 8AM, 3PM, 5PM, 6PM, 7PM

The purpose of flag race is to collect points for your guild and based on the weekly rankings, your guild will receive skill points for Noblesse Skills which are buffs anyone in the guild can use for more damage, boss damage and IED. The higher you rank the more points Tama gets! Please try to go even if it's for the participation points! Use the G and H skills to help you or a guildie finish a race for maximum points.

More details here:
http://reconcilegms.weebly.com/guild-flag-race.html
\`\`\`
`;
module.exports = {
	name: 'flagrace',
	description: 'Provides information flag race',
    aliases: ['flag', 'flagrace'],
	execute(message) {
		message.channel.send(flag);
	},
};
