
exports.up = function(knex, Promise) {
  return knex.schema.table('messages', (table) => {
    table.string('username');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('messages', (table) => {
    table.dropColumn('username');
  })
};
