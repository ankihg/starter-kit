module.exports = {
    PORT: process.env.PORT || 5555,
    DB_PORT: process.env.MY_DB_URI || 'mongodb://localhost/db',
};

exports.DB_PORT = process.env.MY_DB_URI || 'mongodb://localhost/db';

//squashed server
// exports.PORT = process.env.PORT || 8080;
// exports.serverPort = exports.PORT;
// exports.clientServerPort = exports.PORT;
//
// exports.serverUrl = '';
// exports.clientServerUrl = 'http://localhost:'+exports.clientServerPort;
// exports.clientServerUrl2 = 'http://annikahagelin.com';
