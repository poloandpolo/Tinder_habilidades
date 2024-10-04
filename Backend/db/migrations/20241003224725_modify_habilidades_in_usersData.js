// db/migrations/20241003224725_modify_habilidades_in_usersData.js
exports.up = async function(knex) {
    // Primero, convierte las cadenas existentes en el formato de array
    await knex.raw(`
      UPDATE "usersData"
      SET "habilidades" = string_to_array("habilidades", ', ')
      WHERE "habilidades" IS NOT NULL
    `);
    
    // Luego, cambia el tipo de columna a text[]
    await knex.schema.alterTable('usersData', (table) => {
      table.specificType('habilidades', 'text[]').alter();
    });
  };
  
  exports.down = async function(knex) {
    await knex.schema.alterTable('usersData', (table) => {
      table.string('habilidades').alter();
    });
  };
  
  
