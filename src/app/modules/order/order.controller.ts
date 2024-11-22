import { Request, Response } from 'express'
import { orderService } from './order.service'

const orderCars = async (req: Request, res: Response) => {
  try {
    const orderData = req.body

    if (Object.keys(orderData).length === 0) {
      res.status(400).json({
        success: false,
        message: 'Please provide order data',
      })
      return
    }

    const { result, error } = await orderService.orderACarFromDB(orderData)

    if (!result) {
      res.status(400).json({
        success: false,
        message:
          'Order is not created. ' +
          (error == 'ValidationError' ? 'Please provide valid data' : ''),
        error,
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'car is ordered successfully',
        data: result,
      })
    }
  } catch (error: unknown) {
    console.log({
      err: error,
      stack: (error as Error).stack,
    })
  }
}

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const { result, error } = await orderService.calculateRevenueFromDB()

    if (!result) {
      res.status(400).json({
        success: false,
        message: error,
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'revenue is calculated successfully',
        data: result,
      })
    }
  } catch (error: unknown) {
    console.log({
      err: error,
      stack: (error as Error).stack,
    })
  }
}

export const orderController = {
  orderCars,
  calculateRevenue,
}
