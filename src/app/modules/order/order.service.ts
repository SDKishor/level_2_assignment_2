import { CarModel } from '../car/car.model'
import { IOrder, IRevenue } from './order.interface'
import { OrderModel } from './order.model'

const orderACarFromDB = async (
  orderData: IOrder,
): Promise<{ error: null | string; result: IOrder | null }> => {
  try {
    // check if car is available
    const car = await CarModel.findById(orderData.car)

    // if car not found
    if (!car) {
      return { error: 'Car not found', result: null }
    }

    //validate order data to the model
    const order = new OrderModel(orderData)
    await order.validate()

    // Check if the car is in stock and has enough quantity
    if (car.quantity < orderData.quantity) {
      return { error: 'Not enough car quantity in stock', result: null }
    }

    // Update the car quantity
    car.quantity -= orderData.quantity

    // update stock
    car.inStock = car.quantity > 0

    // Save the updated car
    await car.save()

    // create order data
    const result = await OrderModel.create(orderData)

    return { error: null, result }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.name, result: null }
    }
    console.log({
      err: error as Error,
      stack: (error as Error).stack,
    })
    return { error: 'Error fetching car from database', result: null }
  }
}

const calculateRevenueFromDB = async (): Promise<{
  error: null | string
  result: IRevenue | null
}> => {
  try {
    // finding total revenue
    const result = await OrderModel.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: '$totalPrice' },
        },
      },
    ])

    return { error: null, result: result[0] }
  } catch (error: unknown) {
    console.log({
      err: error as Error,
      stack: (error as Error).stack,
    })
    return { error: 'Error fetching car from database', result: null }
  }
}

export const orderService = {
  orderACarFromDB,
  calculateRevenueFromDB,
}
