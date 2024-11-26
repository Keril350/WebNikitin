const Mark = require("../models/mark");
const NotAcceptableError = require("../errors/NotAcceptableError");


class MarkRepository {

  async create(userId, productId, markValue) {

    await Mark.create(
      {
        user_id: userId,
        product_id: productId,
        value: markValue
      }
    );
  }
  async delete(userId, productId) {

    if(!await Mark.findOne({ where: { user_id: userId, product_id: productId } })){

      throw new NotAcceptableError("Mark doesn't exists");

    }

    await Mark.destroy(
      {

        where: { user_id: userId, product_id: productId }

      }
    );
  }

  async markNumber(productId){

    return await Mark.count({ where: { product_id: productId } });

  }

  async markSum(productId) {

    return await Mark.sum("value", { where: { product_id: productId } });

  }

  async find(userId, productId) {

    const mark = await Mark.findOne({ where: { user_id: userId, product_id: productId } });

    if (mark) {

      return mark;

    }

    return false;

  }

  async update(userId, productId, value) {

    await Mark.update(
      { 
        value: value 
      },
      { 
        where: 
        { 
          user_id: userId, 
          product_id: productId 
        } 
      }
    );
  }

  async countMarks(productId) {

    let result = await Mark.count({ where: { product_id: productId } });

    if (result) {

      return result;

    }

    return 0;
    
  }
}

module.exports = new MarkRepository();
