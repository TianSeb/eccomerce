import { Router, Request, Response, NextFunction } from "express"
import { productService } from "../../services/Product.service"
import { auth } from "../../middlewares/Auth"
import { productValidation } from "../../utils/Utils"
//-- Init Constants --//
const asyncHandler = require('express-async-handler')
const productsRoute = Router()

productsRoute.get('/:id?',asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    return res.json({
        data: await productService.get(req.params.id)   
    })
}))

productsRoute.post('/',productValidation,auth,asyncHandler(async(req:Request,res:Response,next:NextFunction) => {
    let data = req.body
    return res.status(201).json({
        data: await productService.createProduct(data)
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

export default productsRoute


