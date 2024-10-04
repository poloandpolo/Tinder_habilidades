const db = require('../config/db');

const getUsers = () => {
  return db('usersData').select('*');
};

const addUser = (user) => {
  return db('usersData').insert(user).returning('*');
};

module.exports = {
  getUsers,
  addUser,
};
