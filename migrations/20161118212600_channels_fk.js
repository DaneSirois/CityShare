
exports.up = function(knex, Promise) {
  return knex.schema.table('channels', function(table) {
    table.integer('city_id').unsigned();
    table.foreign('city_id').references('cities.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('channels', function(table) {
    table.dropColumn('city_id');
  });
};
