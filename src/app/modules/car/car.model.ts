import { Schema, model } from 'mongoose'
import { ICar } from './car.interface'

const carSchema = new Schema<ICar>(
  {
    brand: {
      type: String,
      required: [true, 'Brand is required'],
    },
    model: {
      type: String,
      required: [true, 'Model is required'],
    },
    year: {
      type: Number,
      required: [true, 'Year is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, "Price can't be negative"], // Price can't be negative
    },
    category: {
      type: String,
      enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'], // Restrict to specific values
      required: [true, 'Category is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, "Quantity can't be negative"], // Quantity can't be negative
    },
    inStock: {
      type: Boolean,
      required: [true, 'inStock is required'], // inStock is required
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  },
)

export const CarModel = model<ICar>('Car', carSchema)
