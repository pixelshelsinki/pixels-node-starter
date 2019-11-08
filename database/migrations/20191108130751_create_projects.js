
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments('id').primary();
      table.string('name');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
};