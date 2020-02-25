const express = require('express');
const Users = require('../users/user-models.js');

const router = express.Router();


router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(error => {
        res.status(500).json({error: `There was an issue retrieving users`});
    })
});

router.get('/:id', (req, res) => {
    Users.findById(req.params.id) 
    .then(user => {
        res.status(200).json(user);
    })
    .catch(error => {
        res.status(500).json({error: `There was an issue retrieving user id: ${req.params.id}`});
    });
});



module.exports = router;