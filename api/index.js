const express = require("express")
const app = express()
const { PORT } = require("./src/config/env")
const emailRoute = require("../api/src/route/emailroute")
const cors = require("cors")
app.use(cors())

function checknumber(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", '*')
    res.setHeader("Access-Control-Allow-Headers", "Origin,X-Request,Content-Type,Accept")
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,OPTIONS,DELETE")
    next()
}
app.use(checknumber)
app.use(express.json())

app.use("/emails", emailRoute)

app.listen(PORT, (res) => {
    console.log(`app is listening on ${PORT}`)
})

