exports.up = function(knex) {
    return knex.schema.createTable('testTable', (table) => {
      table.increments('test').primary(); // id autoincrementable
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('testTable'); // elimina la tabla si existe
  } 