const express = require("express");
const router = express.Router();
const smsController = require("../controllers/sms");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified

router.post("/createText", ensureAuth, smsController.createText);

module.exports = router;
