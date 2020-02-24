const db = require('../data/config-db');


module.exports = {
    find,
}

function find(){
    return db('users').select('id', 'username', 'password');
};

// function findById(id){
//     return db('users')
//     .select('id', 'username', 'password')
//     .where('users.id', id);
// }

// function find(){

// }

