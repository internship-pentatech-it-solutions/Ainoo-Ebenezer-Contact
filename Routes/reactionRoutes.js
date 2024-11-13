const express = require("express");
const router = express.Router();
const authenticateToken = require("../Middleware/authMiddleware");
const { likeAContact, dislikeAContact, blockAContact, unblockAContact } = require("../Controller/reactionsController");


router.put("/like/:id", authenticateToken, likeAContact);

router.put("/dislike/:id", authenticateToken, dislikeAContact);

router.put("/block/:id", authenticateToken, blockAContact);

router.put("/unblock/:id", authenticateToken, unblockAContact);



module.exports = router;