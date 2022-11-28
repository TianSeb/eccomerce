import { Request, Response, NextFunction, ErrorRequestHandler } from "express"
const createError = require('http-errors')

export const productValidation = (req:Request,res:Response,next:NextFunction) => {    
    let {nombre, descripcion, codigo, foto, precio, stock} = req.body
    if(!nombre || !descripcion || !codigo || !foto || !precio || !stock) throw createError(400,'Datos Producto invalidos')
    next()
}

export const errorHandlerfunction : ErrorRequestHandler = 
(err:any,res:any,next:any) => {
    return res.json({
        msg: 'There was an unexpected error',
        error: err.message,
        status: err.status
    })
}
