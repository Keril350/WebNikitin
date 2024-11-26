const Tag = require("../models/tag");
const NotAcceptableError = require("../errors/NotAcceptableError");


class TagRepository {

  async create(name) {

    if(!await this.readByName(name)){

     return await Tag.create({
        name: name,
      });
    }
  }


  async delete(id) {

    if(!await Tag.findOne({ where: { id: id } })){
      throw new NotAcceptableError("Tag doesn't exists");
    }

    await Tag.destroy({
      where: { id: id }
    });

  }

  async update(id, name) {

    await Tag.update(
      { name: name },
      { where: { id: id} }
    );

  }

  async searchProductByTag(tagName){

    const tag = await this.readByName(tagName);

    return tag.getProducts();

  }

  async readByName(name) {

    return await Tag.findOne({where: {name: name}});
    
  }

}

module.exports = new TagRepository();
