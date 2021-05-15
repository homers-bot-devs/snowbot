const config = require('../config')
const { MessageEmbed } = require("discord.js");

exports.run = async(client, message, args) => {
  let embed = new MessageEmbed()
  .addField('About Me', 'Im A Discord Bot Made By Nunya-9018/homersrebuttal#9018')
  .addField(`${config.prefix}` + 'help','If You Need Help With Commands Or Want To Know What They Do ' + `${config.prefix}` + 'help')
  .addField('Version', 'The Current Verison Of The Bot Is 1.0')
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
  message.channel.send(embed)       
  }
