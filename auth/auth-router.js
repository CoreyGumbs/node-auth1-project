const express = require('express');
const Users = require('../users/user-models');

const router = express.Router();


router.post('/register', (req, res) => {
    let user = req.body;

    Users.add(user)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(error => {
        res.status(500).json({error: `There was an issue creating user.`});
    });
    
})

module.exports =  router;