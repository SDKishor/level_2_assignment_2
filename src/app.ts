import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { carRoutes } from './app/modules/car/car.route'
import { orderRoutes } from './app/modules/order/order.route'
const app: Application = express()

// middleware
app.use(express.json())
app.use(cors())

// api routes
app.use('/api/cars', carRoutes)

app.use('/api/orders', orderRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
