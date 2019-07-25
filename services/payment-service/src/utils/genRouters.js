import { Router } from 'express'

const router = Router()

import validation from '../middlewares/validation'
import runner from '../middlewares/runner'
import sender from '../middlewares/sender'
import roleResolver from '../middlewares/roleResolver'

const genRouters = routes => {
  routes.forEach(({ method, path, inputSchema, outputSchema, func }) => {
    router[method](
      path,
      roleResolver(),
      validation(inputSchema),
      runner(func),
      sender(outputSchema)
    )
  })
  return router
}

export default genRouters
