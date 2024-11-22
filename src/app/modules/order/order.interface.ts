import { ObjectId } from 'mongoose'

// Order interface
export interface IOrder {
  email: string
  car: ObjectId
  quantity: number
  totalPrice: number
}

// Revenue interface
export interface IRevenue {
  _id: null
  totalRevenue: number
}
