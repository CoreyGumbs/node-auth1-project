const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    res.send('Working router');
});

router.get('/users', (req, res) => {
    res.status(200).json({message: 'users'});
})

router.post('/register', (req, res) =>{
    res.status(201).json({message: 'user created'});
});

router.post('/login/', (req, res) => {
    res.status(200).json({message: 'user logged in'});
});

module.exports = router;