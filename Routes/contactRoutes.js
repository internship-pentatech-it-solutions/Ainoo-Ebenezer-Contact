const express = require('express');
const router = express.Router();
const authenticateToken = require('../Middleware/authMiddleware');
const {
    createContact,
    getAllContact,  
    getContact, 
    delContact, 
    updateContact
} = require('../Controller/contactController')


// creating the get req
router.post('/', authenticateToken,createContact);

router.get('/', authenticateToken,getAllContact);

router.get('/:id', authenticateToken,getContact);


router.put('/:id', authenticateToken,updateContact);

router.delete('/:id', authenticateToken,delContact);

module.exports = router;