module.exports = (clinet, messae) => {
    
    if(message.author.bot) return;


    if(message.content.indexof(client.config.prefix) !==0) return;


    const args = message.content.slice(client.config.prefix.lenght).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);

    if (!cmd) return;

    cmd.run(client, message, args);
};