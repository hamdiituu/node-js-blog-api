const mongoose = require('mongoose');
//TODO slugger default propery
const todoShema = new mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true},
    description: {type: String, required: true},
    done: {type: Boolean, required: true, default: false},
    date: {type: Date, default: Date.now}
});


module.exports = mongoose.model('todo',todoShema);
