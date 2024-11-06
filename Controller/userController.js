const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../model/userModel');
const { default: mongoose } = require('mongoose');

const registerUser = async (req, res) => {
    
    try {
        
        const { email, password, username } = req.body;
        // Check if user already exists
        const existingUser = await users.findOne({email});
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: `${username} is already registered`
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const user = new users({
            username,
            email,
            password: hashedPassword
        });

        await user.save();

        // Create JWT token
        const token = jwt.sign(
            { userId: users._id, email: users.email },
            'process.env.JWT_SECRET',
            { expiresIn: '2h' }
        );

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            token,
            user: {
                id: users._id,
                username: users.username,
                email: users.email
            }
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            message: 'Error registering user',
            error: error.message
        });
    }
};
  
const loginUser= async (req, res) => {
    try {
        const { email, password } = req.body;

        // const { email, password } = req.body;
        console.log("Login attempt:", email);


        // Find user by email
        const user = await users.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            'process.env.JWT_SECRET',
            { expiresIn: '2h' }
        );

        res.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Error logging in',
            error: error.message
        });
    }
};
  
const logedoutUser = async (req, res) => {
    try {
        if (req.session) {
            req.session.destroy();
        }

        res.status(200).json({
            success: true,
            message: 'Logged out successfully'
        });

    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({
            success: false,
            message: 'Error logging out',
            error: error.message
        });
    }
};
  
module.exports = {
    registerUser,
    loginUser,
    logedoutUser,
  };