const mongoose = require('mongoose');
//TODO slugger default propery
const todoShema = new mongoose.Schema({
    name: {type: String, required: true},
    slug: {type: String, required: true},
    email: {type: String, required: true,unique : true},
    password: {type: String, required: true},
    active: {type: Boolean, required: true, default: true},
    date: {type: Date, default: Date.now}
});


module.exports = mongoose.model('user', todoShema);
