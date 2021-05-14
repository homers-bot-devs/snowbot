module.exports = (client) => {
    console.log('Im alive as ' + client.user.tag)

    const activities = [`minecraft in Homers basement`]

    setInterval(() => {
        let activity = activities[Math.floor(Math.random() * activities.length)]
        client.user.setActivity(activity, {type: "PLAYING"})
    }, 5000)
}     