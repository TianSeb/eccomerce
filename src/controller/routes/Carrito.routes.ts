import { Router, Request, Response, NextFunction } from "express"
import CarritoService from "../../services/Carrito.service"

//-- Init Constants --//
const asyncHandler = require('express-async-handler')
const createError = require('http-errors')
const carritoRoute = Router()
const carritoService = new CarritoService()

carritoRoute.post('/',asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    return res.status(201).json({
        data: await carritoService.createCart()
    })
}))

carritoRoute.delete('/:id',asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    return res.status(200).json({
        data: await carritoService.deleteCartById(req.params.id)
    })
}))

carritoRoute.get('/:id/productos',asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    return res.status(200).json({
        data: await carritoService.getCartProductos(req.params.id)
    })
}))

export default carritoRoute