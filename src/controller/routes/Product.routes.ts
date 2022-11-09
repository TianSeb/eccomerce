import { Router, Request, Response, NextFunction } from "express"
import ProductService from "../../services/Product.service"
import { auth } from "../../middlewares/Auth"
import { productValidation } from "../../utils/Utils"
//-- Init Constants --//
const asyncHandler = require('express-async-handler')
const productsRoute = Router()
const productService = new ProductService()

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

productsRoute.post('/',productValidation,auth,asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
        let data = req.body
        return res.status(201).json({
            data: await productService.save(data)
        })
}))

productsRoute.put('/:id',auth,asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    let data = req.body
    return res.status(201).json({
        data: await productService.updateProduct(req.params.id,data)
    })
}))

productsRoute.delete('/:id',auth,asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    return res.json({
        msg: await productService.deleteById(req.params.id)
    })
}))

productsRoute.delete('/',auth,asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    return res.json({
        msg: await productService.deleteAll()
    })
}))

export default productsRoute


