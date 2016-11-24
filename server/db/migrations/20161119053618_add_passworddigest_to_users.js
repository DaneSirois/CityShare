
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.string('email');
    table.string('password_digest');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.dropColumn('email');
    table.dropColumn('password_digest');
  })
};
