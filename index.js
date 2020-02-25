const express = require('express');
const server  = require('./server.js');
const PORT = process.env.PORT || 5000;


    server.use('/', (req, res) => {
        res.send('Server is working')
        res.status(200).json({message: 'server is running'});
    });

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
      });