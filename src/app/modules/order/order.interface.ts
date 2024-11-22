import { ObjectId } from 'mongoose'

export interface IOrder {
  email: string
  car: ObjectId
  quantity: number
  totalPrice: number
}

export interface IRevenue {
  _id: null
  totalRevenue: number
}
