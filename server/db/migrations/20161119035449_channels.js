
exports.up = function(knex, Promise) {
  return knex.schema.createTable('channels', function(table) {
    table.increments();
    table.string('name');
    table.string('tile_img');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('channels');
};
