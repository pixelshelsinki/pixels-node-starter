const bcrypt = require('bcrypt')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(async function () {
      // Inserts seed entries      
	  	const passwordHash = await bcrypt.hash('root', 10)

	  	return knex('users').insert([
	        {username : 'root', password: passwordHash}
	      ]);          
    });
};
