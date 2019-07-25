import Joi from '@hapi/joi'

export const createSchema = Joi.object().keys({
  image: Joi.string().required(),
  dateTime: Joi.date().required(),
  amount: Joi.number().required(),
  name: Joi.string().min(3),
  address: Joi.string(),
  phoneNumber: Joi.string(),
  email: Joi.string()
    .email()
    .lowercase()
    .trim(),
})

export const paymentSchema = Joi.object().keys({
  image: Joi.string(),
  dateTime: Joi.date(),
  amount: Joi.number(),
  name: Joi.string().min(3),
  address: Joi.string(),
  phoneNumber: Joi.string(),
  email: Joi.string()
    .email()
    .lowercase()
    .trim(),
})
