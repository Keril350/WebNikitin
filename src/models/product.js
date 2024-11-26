const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  update_date: {
    type: Sequelize.DATE
  },
  description: {
    type: Sequelize.TEXT
  },
  image: {
    type: Sequelize.STRING
  },
  amount: {
    type: Sequelize.INTEGER
  },
  mark: {
    type: Sequelize.FLOAT
  }
});

Product.beforeCreate((product, options) => {
  product.update_date = new Date();
});

module.exports = Product;
