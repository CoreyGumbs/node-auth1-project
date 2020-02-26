const express = require('express');
const session = require('express-session');
const knexStore = require('connect-session-knex')(session); 
const helmet = require('helmet');
const cors = require('cors'); 
const knex = require('./data/config-db');
const router = require('./router/router');

const server = express();


const sessionConfig = {
    name: 'user',
    secret: 'he who controls the spice, controls the universe',
    resave: false,
    saveUnintialized: true,
    cookie: {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        secure: false,
        httpOnly: true
    },
    store: new knexStore({
       knex,
       tablename: 'sessions',
       createtable: true,
       sidfieldname: 'sid',
       clearInterval:  1000 * 60 * 30,
    })
};

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));


server.use('/api', router);

module.exports = server;
