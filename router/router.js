const express = require('express');
const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/user-router.js');
const restricted = require('../middleware/restricted-session.js');
const router = express.Router();

router.use('/auth', authRouter );
router.use('/users', restricted, userRouter );
router.use('/restricted',restricted, userRouter);



module.exports = router;