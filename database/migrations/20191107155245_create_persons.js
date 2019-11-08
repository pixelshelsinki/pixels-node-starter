
exports.up = function(knex) {
  return knex.schema
    .createTable('persons', table => {
      table.increments('id').primary();
      table.string('firstName');
      table.string('lastName');
      table.string('email');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('persons')
};
