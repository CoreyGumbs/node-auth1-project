const express = require('express');
const Users = require('../models/auth-models');

const router = express.Router();


router.get('/register', (req, res) => {
    res.send('register account');
})

module.exports =  router;