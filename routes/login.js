const express = require('express');
const router = express.Router();

//Validate model
const userLoginValidate = require('../validate/userlogin');
//Mongodb model
const userMongo = require('../models/user');
//Response model
const responseModel = require('../utils/response');
//md5 generate
const md5 = require('md5');
//jwt generate
const jwt = require('jsonwebtoken');

const tokenSecretKey = 'my-secret-key';

router.post('/', function (req, res) {

    const {error, value} = userLoginValidate.validate(req.body);

    if (error) {
        return res.status(400).json(responseModel.error(error));
    }

    const user = userMongo.find(user => {
        return user.email === value.email && user.password === md5(value.password)
    });

    if (!user) {
        res.status(401).json(responseModel.error('Email ve şifre ile uyuşan kullanıcı bulunamadı!'));
    }

    const token = jwt.sign({
        user : user.name,
        email : user.email,
    },tokenSecretKey);

    return res.json(responseModel.success(token));

});


module.exports = router;
