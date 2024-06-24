const Sequelize = require('sequelize');
require('dotenv').config();

console.log("Database name:", process.env.DB_NAME);
console.log("Database user:", process.env.DB_USER);
console.log("Database password:", process.env.DB_PASSWORD ? "Loaded" : "Not loaded");

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432
  });
}

module.exports = sequelize;
