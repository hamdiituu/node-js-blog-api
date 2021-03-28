const express = require('express');
const router = express.Router();

const todoValidate = require('../validate/todo');
const responseModel = require('../utils/response');
const todoMongo = require('../models/todo');
const slugger = require('../utils/slugger');

/* GET listing all todos */
router.get('/', function (req, res) {
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
