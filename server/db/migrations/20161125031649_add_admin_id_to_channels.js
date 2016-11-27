
exports.up = function(knex, Promise) {
  return knex.schema.table('channels', (table) => {
    table.integer('admin_id').unsigned();
    table.foreign('admin_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('channels', (table) => {
    table.dropColumn('admin_id');
  });
};
