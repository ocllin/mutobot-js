var moment = require('moment');

//Collection of all timestamps for flag race events
var races = [moment("12:00:00 pm", "HH:mm:ss a"), moment("07:00:00 pm", "HH:mm:ss a"), moment("09:00:00 pm", "HH:mm:ss a"),
moment("10:00:00 pm", "HH:mm:ss a"), moment("11:00:00 pm", "HH:mm:ss a")];

module.exports = {
	name: 'flagrace',
	description: 'Provides information flag race',
    aliases: ['flag', 'flagrace'],
	execute(message) {
		//Initialize times for flagraces every day
		var d = new Date();
		var timeNow = moment();
		var string = "";
		for(i = 0; i < races.length; i++){
			if (!timeNow.isSameOrAfter(races[i])){
				var duration = moment.duration(races[i].diff(timeNow));
				var hours = parseInt(duration.asHours());
				var minutes = parseInt(duration.asMinutes())%60;
				var seconds = parseInt(duration.asSeconds())% 60;
				//Prepare string for discord output
				string += "Race " + (i+1) + " in:\t" + hours + ' hrs '+ minutes+' mins and ' + seconds+' seconds\n';
			}
		}

		var racesStr = string.slice(0, -1); //Slice last newline off of output
		var closestRace = racesStr.split('\n')[0];
		//Prepare discord statement, formatting sucks :(
		var flag =
    `
\`\`\`css
[Next Race]
${closestRace}
===============
[Flag Race]
${racesStr}
\`\`\`
`;
		message.channel.send(flag);
	},
};
