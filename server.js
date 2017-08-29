const CONFIG = require('./config');

const express = require('express');
const app = new express();

app.use(express.static('ui'));

app.listen(CONFIG.PORT, () => {
    console.log('SERVER HERE, PORT ' + CONFIG.PORT);
});
