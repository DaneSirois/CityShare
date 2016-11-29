
exports.up = function(knex, Promise) {
  return knex.schema.table('channels', (table) => {
    table.string('color');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('channels', (table) => {
    table.dropColumn('color');
  })
};
