const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const ProductTag = sequelize.define("products_tags", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  product_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  tag_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = ProductTag;