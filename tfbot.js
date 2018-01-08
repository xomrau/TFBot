var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');


//Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

//Initialize TF Bot
var tfbot = new Discord.Client({
    token: auth.token,
    autorun: true
});




var emb = {
    author: {
        name: tfbot.username
    }
};

function avatar(user_id, avatar_hash){
    return 'https://cdn.discordapp.com/avatars/' +user_id + '/' + avatar_hash + '.jpg';
}

tfbot.on('ready', function(evt){
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(tfbot.username + ' - (' + tfbot.id + ')');
});

tfbot.on('message', function(user, userID, channelID, message, evt){
    //Our bot needs to know if it will execute a command
    //It will listen for messages that will start with '!'
    if (message.substring(0,1) == '!'){
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd){
            //testing embed
            case 'build':
                tfbot.sendMessage({
                    to: channelID,
                    message: '',
                    embed: {
                        author: {
                            'name': tfbot.username,
                            'icon_url': avatar(tfbot.id, tfbot.avatar)
                        }
                    }
                });
            case 'build': //looking up builds for tf
                tfbot.sendMessage({
                    to: userID,
                    message: ''
                })
            case 'clubs': //list of available clubs for each server

            case 'matchup': //list of match ups

            case 'patch': //show patch (maybe current or patch according to the numbers)

            case 'apdo': 
            
            
            break;
            // Just add any case commands if you want to..
        }
    }
});