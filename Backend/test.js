require('dotenv').config();

const knex = require('knex')({
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    },
  });
  
  knex.raw('SELECT 1')
    .then(() => {
      console.log('Conexión exitosa a la base de datos');
    })
    .catch((err) => {
      console.error('Error al conectar a la base de datos:', err);
      console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
    })
    .finally(() => {
      knex.destroy(); // Cierra la conexión
    });
  