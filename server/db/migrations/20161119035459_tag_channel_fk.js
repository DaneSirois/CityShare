
exports.up = function(knex, Promise) {
  return knex.schema.table('tag_channel', function(table) {
    table.integer('tag_id').unsigned();
    table.foreign('tag_id').references('tags.id');
    table.integer('channel_id').unsigned();
    table.foreign('channel_id').references('channels.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tag_channel', function(table) {
    table.dropColumn('tag_id');
    table.dropColumn('channels_id');
  });
};
