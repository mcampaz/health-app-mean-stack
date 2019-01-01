const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const db = "mongodb://mcampaz:Leticia2012@ds251362.mlab.com:51362/health_appdb";
const User = require('../models/user');
mongoose.connect(db, err => {
    if (err) {
        console.error('Connection Error! ' + err);
    } else {
        console.log("Connected to Mongodb: users collection!");
    }
});

router.get('/', (req, res) =>{
    res.send('From API route');
});

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registerUser) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(registerUser);
        }
    });
});

router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({email: userData.email}, (error, user) => {
        if (error){
            console.log(error);
        }else{
            if(!user) {
                res.status(401).send('Invalid email');
            } else if (user.userName !== userData.userName){
                res.status(401).send('Username not found!');
            } else if (user.password !== userData.password) {
                res.status(401).send('Invalid Password!');
            } else{
                res.status(200).send(user);
            }
        }
    });
});

module.exports = router;