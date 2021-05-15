const config = require('../config')
const { MessageEmbed } = require("discord.js");
exports.run = async(client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle('JavaMC info')
    .setDescription('the java minecraft join info for my MC sever')
    .addField('Server name:','snowskingdom')
    .addField('Server IP:','')
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.display.AvatarURL())
     message.channel.send(embed)
    }