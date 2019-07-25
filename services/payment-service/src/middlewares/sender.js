import Joi from '@hapi/joi'

export default schema => (req, res) => {
  const data = req.result
  const { error, value } = Joi.validate(data, schema, {
    abortEarly: false,
    stripUnknown: true,
  })
  if (error) {
    res.status(400).send(error)
  } else {
    res.send(value)
  }
}
