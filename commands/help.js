const config = require('../config')
const { MessageEmbed } = require("discord.js");
exports.run = async(client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle('Help')
    .addField('prefix','The prefix of this bot is ' +`${config.prefix}`)
    .addField(`${config.prefix}`+'Help', 'Shows this menu')
    .addField(`${config.prefix}`+'About', 'About this bot')
    .addField(`${config.prefix}`+'Bedrock', 'Shows the IP and Port to join the bedrock plugin on my mc server')
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    message.channel.send(embed)
}