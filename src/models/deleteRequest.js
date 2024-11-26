const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const DeleteRequest = sequelize.define("delete_request", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
  ,
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'updated_at'
  }
},
{
  timestamps:true
});

module.exports = DeleteRequest;
