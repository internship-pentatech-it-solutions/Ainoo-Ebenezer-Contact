const express  = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./Routes/contactRoutes');
const userRoutes = require('./Routes/userRoutes');
const sendEmailRoute = require("./Routes/sendEmailRoute")
const reactionRoutes = require("./Routes/reactionRoutes");

require('dotenv').config();
port = 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/users', userRoutes);
app.use("/api/send", sendEmailRoute);
app.use("/api/rect", reactionRoutes)


mongoose
    .connect('mongodb+srv://ainooebenezer05:ainooebenezer05@cluster0.jhkqkgk.mongodb.net/ContactDB?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});