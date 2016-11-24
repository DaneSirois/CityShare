
exports.up = function(knex, Promise) {
  return knex.schema.createTable('topics', function(table) {
    table.increments();
    table.string('name');
    table.integer('channel_id').unsigned();
    table.foreign('channel_id').references('channels.id');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('topics')
};
