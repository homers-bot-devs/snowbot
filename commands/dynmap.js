const config = require('../config')
const { MessageEmbed } = require("discord.js");
exports.run = async(client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle('Dynmap')
    .setDescription('The url and information to use snowskingdom dynamic map system plugin or dynmap')
    .addField('url','put url here')
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
     message.channel.send(embed)
    }