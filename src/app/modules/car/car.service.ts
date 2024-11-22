import { ICar } from './car.interface'
import { CarModel } from './car.model'

// create car into database
const createCarIntoDB = async (
  cardata: ICar,
): Promise<{ error: null | string; result: ICar | null }> => {
  try {
    // create car
    const result = await CarModel.create(cardata)
    return { error: null, result }
  } catch (error: unknown) {
    console.log({
      err: error as Error,
      stack: (error as Error).stack,
    })
    if (error instanceof Error) {
      return { error: error.message, result: null }
    }
    return { error: 'Error creating car into database', result: null }
  }
}

// get all cars from database
const getAllCarFromDB = async (): Promise<{
  error: null | string
  result: ICar[] | null
}> => {
  try {
    // get all cars
    const result = await CarModel.find({})
    return { error: null, result }
  } catch (error: unknown) {
    console.log({
      err: error as Error,
      stack: (error as Error).stack,
    })
    return { error: 'Error fetching cars from database', result: null }
  }
}

// get single car from database
const getSingleCarFromDB = async (
  id: string,
): Promise<{ error: null | string; result: ICar | null }> => {
  try {
    // get single car
    const result = await CarModel.findById(id)
    return { error: null, result }
  } catch (error: unknown) {
    console.log({
      err: error as Error,
      stack: (error as Error).stack,
    })
    return { error: 'Error fetching car from database', result: null }
  }
}

// update car into database
const updateCarIntoDB = async (
  id: string,
  cardata: ICar,
): Promise<{ error: null | string; result: ICar | null }> => {
  try {
    // update car
    const result = await CarModel.findOneAndUpdate({ _id: id }, cardata, {
      new: true,
      runValidators: true,
    })
    return { error: null, result }
  } catch (error: unknown) {
    console.log({
      err: error as Error,
      stack: (error as Error).stack,
    })
    return { error: 'Error updating car in database', result: null }
  }
}

// delete car from database
const deleteCarFromDB = async (
  id: string,
): Promise<{ error: null | string; result: ICar | null }> => {
  try {
    // delete car
    const result = await CarModel.findByIdAndDelete(id)
    return { error: null, result }
  } catch (error: unknown) {
    console.log({
      err: error as Error,
      stack: (error as Error).stack,
    })
    return { error: 'Error deleting car from database', result: null }
  }
}

export const CarService = {
  createCarIntoDB,
  getAllCarFromDB,
  getSingleCarFromDB,
  updateCarIntoDB,
  deleteCarFromDB,
}
