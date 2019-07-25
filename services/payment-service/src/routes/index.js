import { Router } from 'express'

import payment from '../services/payment/routes'

const router = Router()
router.use('/payment', payment)

export default router
