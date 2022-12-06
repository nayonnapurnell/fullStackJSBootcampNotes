const Sequelize = require('sequelize');
//Create a connection object
const sequelize = new Sequelize(
  //Database name
  process.env.DATABASE_NAME,
  //User
  process.env.DATABASE_USER,
  //Password
  process.env.DATABASE_PASS,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
