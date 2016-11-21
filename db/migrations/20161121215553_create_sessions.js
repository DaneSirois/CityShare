
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.specificType('socket_ids', 'jsonb[]');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('socket_ids');
  });
};
