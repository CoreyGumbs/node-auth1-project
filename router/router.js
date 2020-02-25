const express = require('express');
const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/user-router.js');
const restricted = require('../middleware/restricted-middleware');
const router = express.Router();

router.use('/auth', authRouter );
router.use('/users', restricted, userRouter );

router.get('/', (req, res) =>{
    res.send('Working router');
});



module.exports = router;