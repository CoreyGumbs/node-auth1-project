const express = require('express');
const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/user-router.js');
const router = express.Router();

router.use('/auth', authRouter );
router.use('/users', userRouter );

router.get('/', (req, res) =>{
    res.send('Working router');
});



module.exports = router;