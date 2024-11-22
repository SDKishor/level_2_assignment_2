import { Request, Response } from 'express'
import { orderService } from './order.service'

// order cars
const orderCars = async (req: Request, res: Response) => {
  try {
    const orderData = req.body

    //if no data is provided
    if (Object.keys(orderData).length === 0) {
      res.status(400).json({
        success: false,
        message: 'Please provide order data',
      })
      return
    }

    // order a car from database
    const { result, error } = await orderService.orderACarFromDB(orderData)

    // if order is not successful
    if (!result) {
      res.status(400).json({
        success: false,
        message: error,
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

// calculate revenue from all orders
const calculateRevenue = async (req: Request, res: Response) => {
  try {
    // calculate revenue from database
    const { result, error } = await orderService.calculateRevenueFromDB()

    // if not order is found
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
