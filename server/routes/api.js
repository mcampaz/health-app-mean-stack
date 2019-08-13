const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const db = "mongodb://mcampaz:Leticia2012@ds251362.mlab.com:51362/health_appdb";
const User = require('../models/user');
const UserInfoSurvey = require('../models/user_info_survey');

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
    user.save((error, user) => {
        if (error) {
            console.log(error);
        } else {
            let payload = { subject: user};
            let token = jwt.sign(payload, 'secretKey');
            res.status(200).send({token, user});
        }
    });
});

router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({user_name: userData.user_name}, (error, user) => {
        if (error){
            console.log(error);
        }else{
            if(!user) {
                res.status(401).send('Username not found!');
            } else if (user.password !== userData.password) {
                res.status(401).send('Invalid Password!');
            } else{
                let payload = { subject: user._id};
                let token = jwt.sign(payload, 'secretKey');
                res.status(200).send({token, user});
            }
        }
    });
});

router.get('/user_info_form', (req, res) => {

    let user_info_survey = UserInfoSurvey;
    user_info_survey.findOne({}, (error, user_info_survey) => {
        if (error){
            console.log(error);
        }else{
            if(!user_info_survey) {
                res.status(401).send('Form data not found!');
            } else{
                //user.updateOne();
                res.status(200).send(user_info_survey);
            }
        }
    });
});

router.post('/user_info_form', (req, res) => {
    let user_info_survey = req.body;
    let newInfo = new UserInfoSurvey(user_info_survey);
    console.log(newInfo);
    console.log(user_info_survey);
    newInfo.updateOne({}, (error, user_info) => {
        if (error) {
            console.log(error);
        } else {
            let payload = { subject: user_info._id};
            //let token = jwt.sign(payload, 'secretKey');
            res.status(200).send({user_info});
        }
    });
});

router.put('/user_info', (req, res) => {
    let user_data = req.body;
    //let user_data_update = new User(user_data);
    console.log(user_data);
    //console.log(user_data_update);
    User.updateOne(
        {_id: user_data.id },
        {
            $set: { info : user_data.info }
        }, (error, user_info) => {
        if (error) {
            console.log(error);
        } else {
            //let payload = { subject: user_info._id};
            //let token = jwt.sign(payload, 'secretKey');
            res.status(200).send({user_info});
        }
    });
});

module.exports = router;