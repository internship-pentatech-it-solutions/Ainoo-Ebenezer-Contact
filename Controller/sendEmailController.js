const express = require("express");
const CONTACTS = require("../model/contactModel");
const mongoose = require("mongoose");
const { sendEmailToContact } = require("../Controller/sendEmail");

require('dotenv').config();

const sendEmail = async (req, res) => {
  const { contactId } = req.params;

  try {
    
    const contact = await contacts.findById(contactId);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    const result = await sendEmailToContact(contact.email, contact.name);

    if (result.success) {
      res.json({ message: `Email successfully sent to ${contact.email}` });
    } else {
      res.status(500).json({ message: `Failed to send email: ${result.error}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = { sendEmail }
