const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const Tag = sequelize.define("tags", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Tag;
