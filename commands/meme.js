const randomPuppy = require('random-puppy');

module.exports.run = async (client, message, args) => {  

    let reddit = [
        "meme",
        "animemes",
        "MemesOfAnime",
        "animememes",
        "AnimeFunny",
        "dankmemes",
        "dankmeme",
        "wholesomememes",
        "MemeEconomy",
        "techsupportanimals",
        "meirl",
        "me_irl",
        "2meirl4meirl",
        "AdviceAnimals"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    message.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(function (err)  {
      message.channel.send({embed: {
         color: 16734039,
         title: "I can't send that meme! I have error :cry:"
         }})
      return;
    });
}

module.exports.help = {
    name: "meme",
    description: "Sends a random meme",
    usage: "meme",
    type: "Fun" 
}