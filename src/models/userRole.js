const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const UserRole = sequelize.define("users_roles", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  role_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = UserRole;
