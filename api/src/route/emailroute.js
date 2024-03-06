const { Router } = require("express")
const { SendEmail } = require("../controller/sendemail")
const router = Router()
router.post("/portfolioEmail", SendEmail)
module.exports = router
