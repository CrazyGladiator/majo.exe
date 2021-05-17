const Discord = require('discord.js')
const Genius = require("genius-lyrics");
const geniuscli = new Genius.Client()

module.exports = {
 name: "lyrics",
 aliases: [],
 description: "Search for lyrics",
 category: "Music",
 usage: "lyrics <song>",
 run: async (client, message, args) => {
  try {
   const song = args.join(" ")
   if (!song) {
    return message.lineReply({embed: {
     color: 16734039,
     description: "❌ | Please enter a song to search!",
    }})
   }
   try {
   const search = await geniuscli.songs.search(song);
   const lsong = search[0];
   console.log(lsong);
   const lyrics = await lsong.lyrics();
    if (!search || !lsong || !lyrics) lyrics = `No lyrics found for ${song}`;
   } catch (error) {
    lyrics = `No lyrics found for ${song}`;
   }
   let embed = new Discord.MessageEmbed()
    .setTitle(`📑 Lyrics for ${song}`)
    .setDescription(lyrics)
    .setColor("RANDOM")
    .setImage(song.image)
    .setTimestamp()
    .setFooter("Requested by " + `${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
   if (embed.description.length >= 2048)
   embed.description = `${embed.description.substr(0, 2045)}...`;
   return message.lineReply(embed);
  } catch (err) {
   console.log(err);
   message.lineReply({embed: {
    color: 16734039,
    description: "Something went wrong... :cry:"
   }})
  }
 }
}
