/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    // Aquí puedes añadir código para crear la tabla si es necesario
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('testTable'); // Asegúrate de que 'testTable' es el nombre correcto
};
