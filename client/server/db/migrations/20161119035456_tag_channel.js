
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tag_channel', function(table) {
    table.increments();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tag_channel');
};

