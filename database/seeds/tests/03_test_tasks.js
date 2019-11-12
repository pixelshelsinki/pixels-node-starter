const faker = require('faker')

const tasks = []

for( let i = 0; i < 20; i++ ) {

	const taskName = faker.commerce.productName()

  tasks.push( {
  	name: taskName,
    description: 'Do '+faker.commerce.productAdjective()+' '+taskName,
    projectID: faker.random.number(3),
  } )
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert(tasks);
    });
};
