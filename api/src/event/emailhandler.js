
const Event = require("events")
const mailer = require("../config/email")
ev = new Event.EventEmitter()
const { gmail_user } = require("../config/env")

ev.on("sendmail", (email, name, message) => {
    mailer.sendMail({
        subject: "From portfolio",
        from: gmail_user,
        to: "estherodedoyin1@gmail.com",
        template: "portfolio",
        ctx: {
            name: name,
            email: email,
            message: message
        }
    })
})



module.exports = { ev }