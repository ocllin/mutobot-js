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
			if (timeNow.isSameOrAfter(races[i])){
				var duration = moment.duration(races[i].diff(timeNow));
				// duration in hours
				var hours = parseInt(duration.asHours()) + 23;
				// duration in minutes
				var minutes = parseInt(duration.asMinutes())%60 + 59;
				var seconds = parseInt(duration.asSeconds())% 60 + 59;
				string += "Race " + (i+1) + " in:\t" + hours + ' hrs '+ minutes+' mins and ' + seconds+' seconds\n';
			}else{
				var duration = moment.duration(races[i].diff(timeNow));
				// duration in hours
				var hours = parseInt(duration.asHours());

				// duration in minutes
				var minutes = parseInt(duration.asMinutes())%60;
				var seconds = parseInt(duration.asSeconds())% 60;
				string += "Race " + (i+1) + " in:\t" + hours + ' hrs '+ minutes+' mins and ' + seconds+' seconds\n';
			}
		}
		var newStr = string.slice(0, -1); //Slice last newline off of output
		//Prepare discord statement, formatting sucks :(
		var flag =
    `
\`\`\`css
[Flag Race]
${newStr}
\`\`\`
`;
		message.channel.send(flag);
	},
};
