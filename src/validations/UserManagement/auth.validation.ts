import Joi from "joi";

const register = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
    username: Joi.string().required(),
  }),
};

export default {
  register,
};
