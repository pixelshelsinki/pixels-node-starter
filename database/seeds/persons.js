const faker = require('faker')

const persons = []

for( let i = 0; i < 100; i++ ) {
  persons.push( {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email()
  } )
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('persons').del()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert(persons);
    });
};
