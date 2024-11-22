import mongoose, { Schema } from 'mongoose'
import { IOrder } from './order.interface'

// Order schema
const OrderSchema: Schema<IOrder> = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      validate: {
        validator: (email: string) => /\S+@\S+\.\S+/.test(email),
        message: 'Invalid email format',
      },
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car',
      required: [true, 'Car is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price must be at least 0'],
    },
  },
  {
    timestamps: true,
  },
)

// export Order model
export const OrderModel = mongoose.model<IOrder>('Order', OrderSchema)
