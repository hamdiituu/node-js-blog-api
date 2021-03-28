const express = require('express');
const router = express.Router();

//request validate
const todoValidate = require('../validate/todo');
//response model
const responseModel = require('../utils/response');
//mongo model
const todoMongo = require('../models/todo');
//slugger generate
const slugger = require('../utils/slugger');
//middlewares
const userToken = require('../midllewares/usertoken');

/* GET listing all todos */
router.get('/', userToken,function (req, res) {
    return res.json('Hi!')
})

/* GET get by id todo */
router.get('/:id', function (req, res) {

})
/* POST add new todo  */
router.post('/', function (req, res) {
    let {error, value} = todoValidate.validate(req.body);
    if (error) {
        return res.status(400).json(responseModel.error(error));
    }
    todoMongo.create({
        title: value.title,
        description: value.description,
        slug : slugger(value.title),
        done: false
    }).then(result => {
        return res.status(201).json(responseModel.success(result));
    }).catch(error => {
        return res.status(400).json(responseModel.error(error));
    })

})


module.exports = router;
