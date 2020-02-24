const express = require('express');
const authRouter = require('../auth/auth-router');
const router = express.Router();

router.use('/auth', authRouter );

router.get('/', (req, res) =>{
    res.send('Working router');
});

module.exports = router;