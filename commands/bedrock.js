const config = require('../config')
const { MessageEmbed} = require("discord.js");
exports.run = async(client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle('Bedrock_info')
    .setDescription('The bedrock ip and port info')
    .addField('The server name', 'snowskingdom')
    .addField('IP', 'The bedrock IP is:')
    .addField('Port', 'The bedrock Port is:')
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
     message.channel.send(embed)
    }