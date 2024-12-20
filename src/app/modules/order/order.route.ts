import express from 'express'
import { orderController } from './order.controller'

const router = express.Router()

router.post('/', orderController.orderCars)

router.get('/revenue', orderController.calculateRevenue)

export const orderRoutes = router
