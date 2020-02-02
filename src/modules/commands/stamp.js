const Discord = require('discord.js');

module.exports = {
	name: 'stamp',
	description: 'Converts text to discord letter emojis',
    aliases: ['stamp'],
	execute(message, args) {
        //Final string to send as output
        concat_string = "";
        var re = /[^a-zA-Z!?]+/g;

        //Loop to go through every char and convert properly
        var re_filter = /^[a-zA-Z]+$/;
        for(var i = 0; i < args.length; i++){
            for(var j = 0; j < args[i].length; j++){
                //Assign temp to our single character and convert to lowercase
                var temp = args[i].charAt(j).toLowerCase();

                //If temp is valid in our regex then proceed
                if (re_filter.test(temp)){
                    //If a or b then apply special red character :)
                    if(temp == 'a' || temp == 'b'){
                        concat_string += ":" + temp + ':';
                        continue;
                    }
                    //Else just append normal characters
                    concat_string += ":regional_indicator_" + temp + ":";
                }
            }
        }
        //If string is empty throw some messages
        if (concat_string=='') {message.channel.send("Please include some valid text!");return;}

		message.channel.send(concat_string);
	},
};