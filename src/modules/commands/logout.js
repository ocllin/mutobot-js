const Discord = require('discord.js');


module.exports = {
	name: 'logout',
	description: 'Logs the bot out',
    aliases: ['logout'],
	execute(message, args) {
        if (message.author.id === '89973782285910016'){
            message.reply("Signing off!");
            message.client.destroy();
        }
	},
};


