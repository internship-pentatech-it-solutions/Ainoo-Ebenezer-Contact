const express = require('express');
const contacts = require('../model/contactModel');
const { default: mongoose } = require('mongoose');

const  createContact = async(req, res)=>{
    const name = req.body;
    try{
        const findUser = await contacts.findOne(name);
        if (findUser) {
            return res.status(400).json({message: 'Contact already exists'});
        }
        const  createContact = await contacts.create(req.body);
        res.status(201).json(createContact);
    }catch(err){
        res.status(500).json({message: 'Server Error'});
    }
};

const getAllContact = async (req, res) =>{
    try{
        const getAllContact = await contacts.find();
        res.status(200).json(getAllContact);
    }catch{
        res.status(500).json({message: 'Server Error'});
    }
};

const getContact = async (req, res) =>{
    const {id} = req.params;
    try{
        const getaContact = await contacts.findById(id);
        res.status(200).json(getaContact);
    }catch{
        res.status(500).json({message: 'Server Error'});
    }
};

const updateContact= async(req, res)=>{
    const {id} = req.params;
    
    try{
        const updateaContact = await contacts.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json({updateaContact});
        
    }catch(err){
        res.status(500).json({message: 'Server Error'});
    }
};

const delContact = async(req, res)=>{
    const {id} = req.params;
    try{
        const delaContact = await contacts.findByIdAndDelete(id,{new:true});
        res.status(200).json(delaContact);
    }catch(err){
        res.status(500).json({message: 'Server Error'});
    }
}


module.exports = {createContact,
    getAllContact, 
    getContact, 
    delContact, 
    updateContact
}  