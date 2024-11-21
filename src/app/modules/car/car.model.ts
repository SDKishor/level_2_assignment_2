import { Schema, model } from 'mongoose'
import { ICar } from './car.interface'

const carSchema = new Schema<ICar>(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0, // Price can't be negative
    },
    category: {
      type: String,
      enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'], // Restrict to specific values
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0, // Quantity can't be negative
    },
    inStock: {
      type: Boolean,
      required: true, // inStock is required
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  },
)

export const CarModel = model<ICar>('Car', carSchema)
