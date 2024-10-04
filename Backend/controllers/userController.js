const userModel = require('../models/userModel');

const getUsers = async (req, res) => {
  try {
    const users = await userModel.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};

const addUser = async (req, res) => {
  try {
    const newUser = req.body;
    const user = await userModel.addUser(newUser);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error adding user' });
  }
};

module.exports = {
  getUsers,
  addUser,
};
