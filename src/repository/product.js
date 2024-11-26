const Product = require("../models/product");
const sequelize = require("sequelize");
const constants = require("../constants");
const NotAcceptableError = require("../errors/NotAcceptableError");
const Op = sequelize.Op;

class ProductRepository {

  async create(product) {

    return await Product.create(product);

  }

  async read(id){

    const product = await Product.findByPk(id);

    if(!product){

      throw new NotAcceptableError("Product doesn't exists");

    }

    return product;
    
  }

  async readSome(id) {

    return await Product.findAll({where: {id: id}});

  }

  async searchByName(name) {

    return await Product.findAll({where: {name: {[Op.like]: `%${name}%`}}});

  }

  async update(id, productData) {

    if(productData.amount && productData.amount == 0) {

      productData.amount = null;

    }

    productData.update_date = new Date();
    
    return await Product.update(productData, { where: { id: id } });

  }

  async delete(id) {  

    if(!await Product.findOne({ where: { id: id } })){

      throw new NotAcceptableError("Product doesn't exists");

    }

    await Product.destroy({ where: { id: id } });

  }

  async list(params) {

    const productsOnPage = constants.productsOnPage;
    let offset = null, limit = null;
    let where = {};
    let orderBy = [["id", "ASC"]]

    if (params.imgOnly) {

      where.image = { [Op.ne]: null };

    }

    if (params.orderBy) {

      orderBy = [[params.orderBy, "ASC"]];

    }

    if(params.page){

      let page = params.page;

      offset = page * productsOnPage - productsOnPage;
      
      limit =  productsOnPage;

    }

    let result = await Product.findAll({
      where,
      order: [
          sequelize.fn('isnull', sequelize.col('amount')),
          orderBy
      ],
      offset: offset,
      limit: limit
    });

    return result;
  }
}

module.exports = new ProductRepository();
