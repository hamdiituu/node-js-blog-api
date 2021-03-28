const express = require('express');
const router = express.Router();

//Validate model
const userregisterValidate = require('../validate/userregister');
//Mongodb model
const userMongo = require('../models/user');
//Response model
const responseModel = require('../utils/response');
//Slug generate
const slugger = require('../utils/slugger');
//md5 generate
const md5 = require('md5');


router.get('/', function (req, res) {
    return res.json('Hi!')
})

router.post('/', function (req, res) {
    const {error, value} = userregisterValidate.validate(req.body);
    if (error) {
        return res.status(400).json(responseModel.error(error));
    }
    userMongo.create({
        name: value.name,
        email: value.email,
        slug: slugger(value.email),
        password: md5(value.password)
    }).then(message => {
        return res.status(201).json(responseModel.success('Basariyla kullanici olusturuldu'));
    }).catch(error => {
        return res.status(400).json(responseModel.error(error));
    })
});


module.exports = router;
