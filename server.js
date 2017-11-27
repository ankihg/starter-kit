'use strict';
const CONFIG = require('./config');

const express = require('express');
const app = new express();

const api = require('./api')(CONFIG, app);

app.use(express.static('ui'));

app.listen(CONFIG.PORT, () => {
    console.log('SERVER SPEAKING, PORT ' + CONFIG.PORT);
});
