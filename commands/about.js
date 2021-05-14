const config = require('../config')
const { MessageEmbed } = require("discord.js");

exports.run = async(client, message, args) => {
  let embed = new MessageEmbed()
  .addField('About Me', 'im a disocrd bot made buy Nunya-9018/homersrebuttal#9018')
  .addField(`${config.prefix}` + 'help','if you need help with commands or want to know what they do ' + `${config.prefix}` + 'help')
  .addField('Version', 'The current verison of the bot is 1.0')
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
  message.channel.send(embed)       
  }