
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'testyMctesty',
          password: 'password12345'
        },
        {
          username: 'johnnyMcJohnny',
          password: 'beBadJohnny1'
        },
        {
          username: 'martyMcFly',
          password: 'ikissedmymom'
        }
      ]);
    });
};
