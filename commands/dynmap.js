const config = require('../config')
const { MessageEmbed } = require("discord.js")
exports.run = async(client, message, args) => {
    let embed = MessageEmbed()
    .setTitle('Dynmap')
    .setDescription('The url and information to use snowskingdom dynamic map system plugin or dynmap')
    .addField('url','put url here')
}