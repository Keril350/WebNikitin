const Joi = require("joi");

const TagScheme = {
    create: Joi.object().keys({
      name: Joi.string()
        .min(1)
        .max(50)
        .required()
    }),

    update: Joi.object().keys({
        name: Joi.string().min(1).max(50),
    }),
}

module.exports = UserScheme;