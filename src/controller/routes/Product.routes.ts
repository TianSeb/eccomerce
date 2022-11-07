import { Router, Request, Response, NextFunction } from "express"
import ProductService from "../../services/Product.service"

//-- Init Constants --//
const asyncHandler = require('express-async-handler')
const createError = require('http-errors')
const productsRoute = Router()
const productService = new ProductService()

const productValidation = (req:Request,res:Response,next:NextFunction) => {    
    let {nombre, descripcion, codigo, foto, precio, stock} = req.body
    if(!nombre || !descripcion || !codigo || !foto || !precio || !stock) throw createError(400,'Datos invalidos');
    next()
}

productsRoute.get('/',asyncHandler(async (req:Request,res:Response,next:NextFunction) => {
    return res.json({
        data: await productService.getAll()
    })
}))

productsRoute.get('/:id',asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
        return res.json({
            data: await productService.getById(req.params.id)   
        })
}))

productsRoute.post('/',productValidation,asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
        let data = req.body
        return res.status(201).json({
            data: await productService.save(data)
        })
}))

productsRoute.put('/:id',asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    let data = req.body
    return res.status(201).json({
        data: await productService.updateProduct(req.params.id,data)
    })
}))

productsRoute.delete('/:id',asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    return res.json({
        msg: await productService.deleteById(req.params.id)
    })
}))

productsRoute.delete('/',asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    return res.json({
        msg: await productService.deleteAll()
    })
}))

export default productsRoute


