import { Request, Response, NextFunction } from "express"
const createError = require('http-errors')

export const productValidation = (req:Request,res:Response,next:NextFunction) => {    
    let {nombre, descripcion, codigo, foto, precio, stock} = req.body
    if(!nombre || !descripcion || !codigo || !foto || !precio || !stock) throw createError(400,'Datos Producto invalidos')
    next()
}