const express = require("express");
const contacts = require("../model/contactModel");
const mongoose = require("mongoose");


const likeAContact = async (req, res) => {
    const { id } = req.params;
    try {
        const likedcontact = await contacts.findByIdAndUpdate(id, {liked:true}, { new: true });
        res.status(200).json(likedcontact);
    } catch (error) {
        res.status(500).json("Server side error" + error);
    }
}


const dislikeAContact = async (req, res) => {
    const { id } = req.params;
    try {
        const unlikedcontact = await contacts.findByIdAndUpdate(id, {liked:false}, { new: true });
        res.status(200).json(unlikedcontact);
    } catch (error) {
        res.status(500).json("Server side error" + error);
    }
}
const blockAContact = async (req, res) => {
    const { id } = req.params;
    try {
        const blockedcontact = await contacts.findByIdAndUpdate(id, {blocked:true}, { new: true });
        res.status(200).json(blockedcontact);
    } catch (error) {
        res.status(500).json("Server side error" + error);
    }
}
const unblockAContact = async (req, res) => {
    const { id } = req.params;
    try {
        const unblockedcontact = await contacts.findByIdAndUpdate(id, {blocked:false}, { new: true });
        res.status(200).json(unblockedcontact);
    } catch (error) {
        res.status(500).json("Server side error" + error);
    }
}



module.exports= { likeAContact, dislikeAContact, blockAContact, unblockAContact}