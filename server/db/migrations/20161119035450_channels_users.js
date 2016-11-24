
exports.up = function(knex, Promise) {
  return knex.schema.createTable('channels_users', function(table) {
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id');
    table.integer('channel_id').unsigned();
    table.foreign('channel_id').references('channels.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('channels_users');
};
