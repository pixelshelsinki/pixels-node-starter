exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('persons').del()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
          {
            firstname: 'Sampo',
            lastname: 'Silvennoinen',
            email: 'sampo@test.fi'
          },
          {
            firstname: 'Heikki',
            lastname: 'Seppänen',
            email: 'heikki@test.fi'
          },
          {
            firstname: 'Matias',
            lastname: 'Kosonen',
            email: 'matias@test.fi'
          }
        ]);
    });
};
