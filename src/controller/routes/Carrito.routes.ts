import { Router, Request, Response, NextFunction } from "express"
import { carritoService } from "../../services/Carrito.service"

//-- Init Constants --//
const asyncHandler = require('express-async-handler')
const carritoRoute = Router()

carritoRoute.get('/:id?',asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    return res.json({
        data: await carritoService.getCart(req.params.id)
    })
}))

carritoRoute.post('/',asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    return res.json({
        data: await carritoService.createCart()
    })
}))

carritoRoute.post('/:id/productos',asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    return res.json({
        data: await carritoService.saveProductInCart(req.params.id,req.body)
    })
}))

carritoRoute.delete('/:id',asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    return res.json({
        data: await carritoService.deleteCartById(req.params.id)
    })
}))

carritoRoute.delete('/:id/productos/:id_prod',asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    return res.json({
        data: await carritoService.deleteProductInCart(req.params.id,req.params.id_prod)
    })
}))

carritoRoute.get('/:id/productos',asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    return res.json({
        data: await carritoService.getCartProductos(req.params.id)
    })
}))

export default carritoRoute