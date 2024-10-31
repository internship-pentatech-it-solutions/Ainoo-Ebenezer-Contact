const express = require('express');
const router = express.Router();
const {
    createContact,
    getAllContact,  
    getContact, 
    delContact, 
    updateContact
} = require('../Controller/contactController')

// creating the get req
router.post('/', createContact);

router.get('/', getAllContact);

router.get('/:id', getContact);


router.put('/:id',updateContact);

router.delete('/:id',delContact);

module.exports = router;