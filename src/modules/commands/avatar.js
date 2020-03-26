const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
	name: 'avatar',
	description: 'Returns Maplestory avatar',
    aliases: ['avatar', 'ava'],
	execute(message, args) {
		var name = args[0];
		const siteUrl = 'http://maplestory.nexon.net/rankings/overall-ranking/legendary?pageIndex=1&character_name=' + name + '&search=true&region=&rebootIndex=1#ranking';
		var imgUrl = ""
		console.log(name);

		axios.get(siteUrl).then((response)=>{
			let $ = cheerio.load(response.data);

		})
		axios.get(siteUrl).then((response) => {
			let $ = cheerio.load(response.data);
			//Try to fetch information pertaining to username
			try{
				//Get avatar from page
				var obj = $(".avatar");
				//Strip to URL
				imgUrl = obj[0]['attribs']['src'];

				const embed = new Discord.RichEmbed()
				.setTitle(name + "'s avatar")
				.setColor(0x00AE86)
				.setImage(imgUrl);

				message.channel.send({embed});
			}catch(error){ //Catch any invalid usernames
				message.channel.send("I couldn't find that username");
			}
		})
	},
};