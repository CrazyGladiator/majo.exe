const Discord = require("discord.js");
const config = require("../config");
const prefix = config.prefix;

module.exports = {
 name: "avatar",
 //aliases: [],
 description: "Gets user's avatar from a mention",
 category: "Utility",
 usage: "avatar <mention>",
 run: async (client, message, args) => {
  if (!message.mentions.users.size) {     
   let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username + "'s Avatar", message.author.displayAvatarURL())
    .setImage(message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 })) 
    .setFooter("Requested by " + `${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
   message.channel.send(embed)
  }
  const avatarList = message.mentions.users.map(user => {
   return `${user.username},${user.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 })}`;
  });
  for (var i = 0; i < avatarList.length; i++) {
   let Username = avatarList[i].split(',')[0];
   let AvatarURL = avatarList[i].split(",").pop();
   let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(Username + "'s Avatar", AvatarURL)
    .setImage(AvatarURL)
    .setFooter("Requested by " + `${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
   message.channel.send(embed)
  }
 }
}
