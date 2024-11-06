const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,  
    logedoutUser, 
} = require('../Controller/userController');

router.post('/', registerUser);

router.post('/login', loginUser);

router.get('/me', logedoutUser);

module.exports = router;