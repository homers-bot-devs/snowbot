module.exports = (clients) => {
    console.log('Im alive as ' + clients.user.tag)

    const activities = [`minecraft in Homers basement`]

    serInterval(() => {
        let activity = activities[Math.floor(Math.random() * activities.length)]
        client.user.setActivity(activity, {type: "PLAYING"})
    }, 5000
}     