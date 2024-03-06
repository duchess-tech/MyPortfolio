require("dotenv").config()
const { PORT, gmail_password, gmail_user } = process.env
module.exports = { PORT, gmail_password, gmail_user }