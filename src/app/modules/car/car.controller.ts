import { Request, Response } from 'express'
import { CarService } from './car.service'
import { ICar } from './car.interface'

// create car
const createCar = async (req: Request, res: Response) => {
  try {
    const cardata = req.body

    //if no data is provided
    if (Object.keys(cardata).length === 0) {
      res.status(400).json({
        success: false,
        message: 'Please provide car data',
      })
      return
    }

    const { error, result } = await CarService.createCarIntoDB(cardata)

    if (!result) {
      //if car is not created
      res.status(400).json({
        success: false,
        message: error,
      })
    } else {
      //if car is created
      res.status(200).json({
        success: true,
        message: 'car is created successfully',
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

// get all cars
const getAllCars = async (req: Request, res: Response) => {
  try {
    // get all cars from database
    const { error, result } = await CarService.getAllCarFromDB()

    if (!result) {
      //if cars are not found
      res.status(404).json({
        success: false,
        message: 'cars are not found',
        error,
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'cars are fetched successfully',
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

// get single car
const getSingleCar = async (req: Request, res: Response) => {
  try {
    const id = req.params.carId

    // get single car from database
    const { error, result } = await CarService.getSingleCarFromDB(id)

    if (!result) {
      //if car is not found
      res.status(404).json({
        success: false,
        message: 'car is not found',
        error,
      })
    } else
      res.status(200).json({
        success: true,
        message: 'car is fetched successfully',
        data: result,
      })
  } catch (error: unknown) {
    console.log({
      err: error,
      stack: (error as Error).stack,
    })
  }
}

// update car data
const updateCar = async (req: Request, res: Response) => {
  // List of allowed keys
  const allowedKeys: (keyof ICar)[] = [
    'brand',
    'model',
    'year',
    'price',
    'category',
    'description',
    'quantity',
    'inStock',
  ]

  try {
    const id = req.params.carId
    const cardata = req.body

    //if no data is provided
    if (Object.keys(cardata).length === 0) {
      res.status(400).json({
        message: 'No update fields provided to update',
      })
      return
    }

    // Filter out keys that are not allowed
    const filteredData = Object.keys(cardata).reduce((acc, key) => {
      if (allowedKeys.includes(key as keyof ICar)) {
        acc[key as keyof ICar] = cardata[key]
      }
      return acc
    }, {} as Partial<ICar>)

    // If no valid fields are found, return an error
    if (Object.keys(filteredData).length === 0) {
      res.status(400).json({
        message: 'No valid fields provided to update',
        data: cardata,
      })
      return
    }

    // Update the car in the database
    const { error, result } = await CarService.updateCarIntoDB(id, cardata)

    if (!result) {
      //if car is not found
      res.status(404).json({
        success: false,
        message: 'car is not found',
        error,
      })
    } else
      res.status(200).json({
        success: true,
        message: 'car is updated successfully',
        data: result,
      })
  } catch (error: unknown) {
    console.log({
      err: error,
      stack: (error as Error).stack,
    })
  }
}

// delete car
const deleteCar = async (req: Request, res: Response) => {
  try {
    const id = req.params.carId

    // delete car from database
    const { result, error } = await CarService.deleteCarFromDB(id)

    if (!result) {
      //if car is not found
      res.status(404).json({
        success: false,
        message: 'car is not found',
        error,
      })
    } else
      res.status(200).json({
        success: true,
        message: 'car is deleted successfully',
        data: result,
      })
  } catch (error: unknown) {
    console.log({
      err: error,
      stack: (error as Error).stack,
    })
  }
}

export const carController = {
  createCar,
  getAllCars,
  getSingleCar,
  updateCar,
  deleteCar,
}
