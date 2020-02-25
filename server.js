const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./router/router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());


server.use('/api', router);

module.exports = server;