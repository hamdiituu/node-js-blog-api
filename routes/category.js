const express = require('express');
const router = express.Router();

router.get('/',function (req,res,next) {
    return res.json('Hi!')
})

router.post('/',function (req,res){

})

module.exports = router;
