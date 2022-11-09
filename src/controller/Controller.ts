import Router from 'express'
import productsRoute from './routes/Product.routes'
import carritoRoute from "./routes/Carrito.routes"
import { errorHandling } from "../middlewares/ErrorHandling"

const controller = Router()

controller.use('/api/productos', productsRoute)
controller.use('/api/carrito', carritoRoute)
controller.use('/',errorHandling)

export {controller}