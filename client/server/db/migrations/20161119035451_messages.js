
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function(table) {
    table.increments();
    table.text('message_text');
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
