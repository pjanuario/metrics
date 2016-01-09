exports.up = function(knex, Promise) {
  return knex.schema.createTable('metrics',function(table){
    table.increments();
    table.timestamp('timestamp').notNullable();
    table.string('name').notNullable();
    table.decimal('value').notNullable();
    table.string('unit');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('metrics');
};
