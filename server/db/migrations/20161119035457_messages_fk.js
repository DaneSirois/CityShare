
exports.up = function(knex, Promise) {
  return knex.schema.table('messages', function(table) {
    table.integer('channel_id').unsigned();
    table.foreign('channel_id').references('channels.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('messages', function(table) {
    table.dropColumn('channel_id');
  });
};
