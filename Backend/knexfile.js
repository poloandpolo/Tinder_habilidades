require('dotenv').config({ path: '.env' });
const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    },
    migrations: {
      directory: './db/migrations', // Asegúrate de usar path.join
    },
    seeds: {
      directory: path.join(__dirname, 'seeds'), // Asegúrate de usar path.join
    },
  },
};
