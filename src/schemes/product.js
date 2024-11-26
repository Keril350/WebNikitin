const Joi = require("joi");

const ProductScheme = {
    create: Joi.object().keys(
      {
        name: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),

        price: Joi.number()
        .positive()
        .required(),

        update_date: Joi.forbidden(),

        description: Joi.string(),

        image: Joi.string().max(255),

        amount: Joi.number()
        .integer()
        .min(0),

        mark: Joi.forbidden()
      }
    ),

    update: Joi.object().keys(
      {
        name: Joi.string()
        .alphanum()
        .min(3)
        .max(50),

        price: Joi.number().positive(),

        update_date: Joi.forbidden(),

        description: Joi.string(),

        image: Joi.string().max(255),

        amount: Joi.number()
        .integer()
        .min(0),

        mark: Joi.forbidden()
    }
  )
}

module.exports = ProductScheme;
