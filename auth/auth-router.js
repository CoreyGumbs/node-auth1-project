const express = require('express');
const Users = require('../users/user-models');
const bcrypt =  require('bcryptjs');
const router = express.Router();


router.post('/register', (req, res) => {
    let user = req.body;

    const salt = bcrypt.genSaltSync(10); 
    const hash = bcrypt.hashSync(user.password, salt);
    
    user.password = hash;

    Users.add(user)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(error => {
        res.status(500).json({error: `There was an issue creating user.`});
    });
    
})

module.exports =  router;