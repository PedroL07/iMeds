const express = require("express");
const router = express.Router();
const callController = require("../controllers/call");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.post("/createCall", ensureAuth, callController.createCall);

module.exports = router;
