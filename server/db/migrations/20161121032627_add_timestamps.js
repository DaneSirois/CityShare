
exports.up = function(knex, Promise) {
  return knex.schema.table('topics', function(table) {
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('topics', function(table) {
    table.dropColumn('created_at');
    table.dropColumn('updated_at');
  });
};
