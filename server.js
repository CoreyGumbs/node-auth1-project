const express = require('express');
const session = require('express-session');
const helmet = require('helmet');
const cors = require('cors');
const sessionConfig = require('./sessions/session-config');
const router = require('./router/router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));


server.use('/api', router);

module.exports = server;