const express = require('express');
const server  = require('./server.js');
const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
    res.json({message: `server working on port ${PORT}`});
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});