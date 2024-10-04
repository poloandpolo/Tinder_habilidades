exports.up = function(knex) {
    return knex.schema.createTable('usersData', (table) => {
      table.increments('id').primary(); // id autoincrementable
      table.string('nombre').notNullable(); // nombre del usuario
      table.integer('edad').notNullable(); // edad del usuario
      table.string('habilidades'); // habilidades del usuario
      table.decimal('precio_por_hora', 10, 2); // precio por hora
      table.text('descripcion'); // descripción del usuario
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('usersData'); // elimina la tabla si existe
  };
  
