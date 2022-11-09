import { Request, Response, NextFunction } from "express"

export const errorHandling = (req:Request,res:Response,next:NextFunction) => {
    const status = 404;
    const message = {
        error: status,
        descripcion: `ruta ${req.url} para método ${req.method} no implementada`
    }
    return res.status(status).json({
        message
    })
}