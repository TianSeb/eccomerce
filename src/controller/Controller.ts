import { Router } from 'express'
import productsRoute from './routes/Product.routes'

const controller = Router()

controller.use('/api/productos', productsRoute)

export default controller