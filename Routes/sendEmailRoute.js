const express = require("express");
const router = express.Router();
const { sendEmail } = require("../Controller/sendEmailController");
const sendEmailToContact = require("../Controller/sendEmail");
const authenticateToken = require("../Middleware/authMiddleware");



router.post('/send-email/:contactId', authenticateToken, sendEmail);

module.exports = router;