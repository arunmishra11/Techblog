const { User } = require('../models');

const userData = [
  {
    username: 'arunmishra11',
    password: 'test1'
    
  },
  {
    username: 'akm',
    password: 'test2'
  },
  {
    username: 'Boss',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;