const sequelize = require("./sequelize");
const constants = require("../constants");

require("../models");

const userService = require("../services/user");

class DataBase {
  async connect() {
    await sequelize.sync();
    console.log("DB connected");

    let admin = await userService.findUserByEmail("admin@gmail.com");
    if (!admin) {
      admin = await userService.addUser({
        email: "admin@gmail.com",
        password: "admin",
        first_name: "AdminFName",
        last_name: "AdminLName"
      });
      userService.setRole(admin.id, constants.adminRoleNum);
    }
  }
}

module.exports = new DataBase();
