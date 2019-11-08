const faker = require('faker')

const projects = []

for( let i = 0; i < 15; i++ ) {
  projects.push( {
  	id: i,
    name: faker.company.companyName(),
  } )
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert(projects);
    });
};
