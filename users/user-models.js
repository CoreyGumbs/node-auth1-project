const db = require('../data/config-db');


module.exports = {
    find,
    findBy, 
    findById,
    add
}

function find(){
    return db('users').select('id', 'username', 'password');
};

function findBy(filter){
    return db('users')
    .select('id', 'username', 'password')
    .where(filter);
}

function findById(id){
    return db('users')
    .select('id', 'username', 'password')
    .where('users.id', id);
};

function add(user){
    return db('users')
    .insert(user, "id")
};

