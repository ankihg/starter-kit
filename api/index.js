'use strict';
const mongoose = require('mongoose');

module.exports = (CONFIG, router) => {
    const DB_PORT = CONFIG.DB_PORT;
    mongoose.connect(DB_PORT);

    const models = {};
    require('./Work/schema.js')(mongoose, models);

    require('./Work/routes.js')(router, models);
};
