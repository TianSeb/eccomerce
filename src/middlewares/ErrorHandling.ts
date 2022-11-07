import { Request, Response } from "express"

const errorHandling = (req:Request,res:Response) => {
    const status = 404;
    const message = {
        error: status,
        descripcion: `ruta ${req.url} para método ${req.method} no implementada`
    }

    return res.status(status).json({
        message
    })
}

export default errorHandling
