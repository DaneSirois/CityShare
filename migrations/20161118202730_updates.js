
exports.up = function(knex, Promise) {
  return knex.schema.createTable('updates', function(table) {
    table.increments();
    table.string('content')
    table.integer('topic_id').unsigned();
    table.foreign('topic_id').references('topics.id');


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('updates');
};
