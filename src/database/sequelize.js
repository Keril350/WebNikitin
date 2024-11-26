const Sequelize = require("sequelize");
const config = require("../config/sequelize");

const sequelize = new Sequelize("e_Shop_db", "root", "root", config);

module.exports = sequelize;
