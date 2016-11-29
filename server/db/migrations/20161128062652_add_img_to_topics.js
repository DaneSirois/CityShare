
exports.up = function(knex, Promise) {
  return knex.schema.table('topics', (table) => {
    table.string('img_url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('topics', (table) => {
    table.dropColumn('img_url');
  })
};
