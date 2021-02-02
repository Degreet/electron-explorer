const requestHandler = require('./requestHandler.js');
const setupElectron = require('./electron-setup.js');

const http = require('http');
const server = http.createServer(requestHandler);

server.listen(5858);
setupElectron();
