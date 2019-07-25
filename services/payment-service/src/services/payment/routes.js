import genRouters from '../../utils/genRouters'

import { createSchema, paymentSchema } from './schema'

import { create } from '.'

const routes = [
  {
    path: '/',
    method: 'post',
    func: create,
    inputSchema: createSchema,
    outputSchma: paymentSchema,
  },
]

const router = genRouters(routes)

export default router
