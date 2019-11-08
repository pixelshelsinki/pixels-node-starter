
exports.up = function(knex) {
  return knex.schema
    .createTable('tasks', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('description');
      table.integer('projectID').references('projects.id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
};