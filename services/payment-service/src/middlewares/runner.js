export default func => (req, res, next) => {
  func(req.args)
    .then(result => {
      req.result = result
      next()
    })
    .catch(err => {
      console.error(err)
      res.status(err.code || 500).send({ error: err })
    })
}
