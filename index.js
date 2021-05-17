const util = require('minecraft-server-util');
const Discord = require("discord.js");
const fs = require("fs");


const client = new Discord.Client();
const config = require("./config.js");
client.config = config;
client.queue = new Map()

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.login(config.token);



const SERVER_ADDRESS = '0.0.0.0';
const SERVER_PORT = 25565;

const STATUS_COMMAND = '`${config.prefix}`+status';
const STATUS_ERROR = 'Error getting Minecraft server status...';
const STATUS_ONLINE = '**Minecraft** server is **online**';
const STATUS_PLAYERS = '**{online}** people are playing!';
const STATUS_EMPTY = '**Nobody is playing';

const IP_COMMAND = '`${config.prefix}`+ip';
const IP_RESPONSE = 'The address for the server is `{address}:{port}`';



const cacheTime = 15 * 1000; // 15 sec cache time
let data, lastUpdated = 0;

client.on('message', message => { // Listen for messages and trigger commands
    if(message.content.trim() == STATUS_COMMAND) {
        statusCommand(message);
    } else if(message.content.trim() == IP_COMMAND) {
        ipCommand(message);
    }
});

function statusCommand(message) { // Handle status command
    getStatus().then(data => {
        let status = STATUS_ONLINE;
        status += data.onlinePlayers ? 
            STATUS_PLAYERS.replace('{online}', data.onlinePlayers) : STATUS_EMPTY;
        message.reply(status);
    }).catch(err => {
        console.error(err);
        message.reply(STATUS_ERROR);
    })
}

function getStatus() {
    // Return cached data if not old
    if (Date.now() < lastUpdated + cacheTime) return Promise.resolve(data);
    return util.status(SERVER_ADDRESS, { port: SERVER_PORT })
        .then(res => {
            data = res;
            lastUpdated = Date.now();
            return data;
        })
}

function ipCommand(message) { // Handle IP command
    const response = IP_RESPONSE
        .replace('{address}', SERVER_ADDRESS).replace('{port}', SERVER_PORT)
    message.reply(response);
}
