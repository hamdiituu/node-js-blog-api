const express = require('express');
const app = express();

/*Api routes */
app.use('/todo',require('./todo'));
app.use('/category',require('./category'));
app.use('/user',require('./user'));

module.exports = app;
