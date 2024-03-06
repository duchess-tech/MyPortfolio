const { ev } = require("../event/emailhandler")

const SendEmail = async (req, res) => {
    const email = req.body.email
    const name = req.body.name
    const message = req.body.message

    try {
        console.log("here")
        ev.emit("sendmail", email, name, message)
        res.status(200).json({ message: "successfull" })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Not successfuly" })
        
    }



}
module.exports = { SendEmail }
