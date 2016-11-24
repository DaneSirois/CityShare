
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.string('session_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('socket_ids');
  });
};
