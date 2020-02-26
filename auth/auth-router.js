const express = require('express');
const bcrypt =  require('bcryptjs');
const Users = require('../users/user-models');

const router = express.Router();


router.post('/register', (req, res) => {
    let user = req.body;

    const salt = bcrypt.genSaltSync(10); 
    const hash = bcrypt.hashSync(user.password, salt);
    
    user.password = hash;

    Users.add(user)
    .then(user => {
        req.session.loggedIn = true;
        req.session.user = user;

        res.status(201).json(user);
    })
    .catch(error => {
        res.status(500).json({error: `There was an issue creating user.`});
    });
});


router.post('/login', (req, res) => {
    let {username, password} = req.body;

    Users.findBy({username})
    .first()
    .then(user => {

        if(user && bcrypt.compareSync(password, user.password)){
            req.session.loggedIn = true;
            req.session.userId= user.id;

            res.status(200).json({message: `Welcome ${user.username}, you are currently logged in.`});
        }
        else{
            res.status(401).json({message: "Invalid Credentials"});
        }
    })
    .catch(error => {
        res.status(500).json({error: 'There was a problem logging in.'});
    });
})

router.get('/logout', (req, res) => {
    if(req.session){
        req.session.destroy(err => {
            if(err){
                res.status(500).json({error: `There was an error. Unable to logout.`});
            }else{
                res.status(200).json({message: ` logged out.`});
            }
        });  
    }else{
        res.status(200).json({message: `You have been logged out.`});
    }

});

module.exports =  router;