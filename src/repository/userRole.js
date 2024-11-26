const UserRole = require("../models/userRole");
const constants = require("../constants");

class UserRoleRepository {

  async create(userId, roleId) {

    await UserRole.create(
      { 
        user_id: userId, 
        role_id: roleId 
      })
    ;

  }

  async getRoleId(userId) {

    let userRole = await UserRole.findOne(
      {
        where: 
        { 
          user_id: userId 
        },
        raw: true
      }
    );

    return userRole.role_id;

  }

  async isLastAdmin(userId) {

    let inst = await UserRole.findOne(
      {
        where: 
        { 
          user_id: userId 
        },
        raw: true
      }
    );

    if (inst.role_id == constants.adminRoleNum) {

      const adminNum = await UserRole.count(
        { 
          where: 
          { 
            role_id: 2 
          } 
        }
      );
      
      if (adminNum == 1) {

        return true;

      }
    }

    return false;

  }

  async setRole(userId, roleId) {

    UserRole.update(
      { 
        role_id: roleId 
      }, 
      { 
        where: 
        { 
          user_id: userId 
        } 
      }
    );
  }
}

module.exports = new UserRoleRepository();
