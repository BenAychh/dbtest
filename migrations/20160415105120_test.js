
exports.up = function (knex, Promise) {
  return knex.schema.createTable('tests', function (table) {
    table.increments('id');
    table.string('test');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tests');
};
