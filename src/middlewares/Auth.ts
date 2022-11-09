import { Request, Response, NextFunction } from "express"
import Config from "../config/Config"

export const auth = (req:Request,res:Response,next:NextFunction) : void => {
    if(!Config.admin){
        res.status(401).json({
            msg: `Usuario no autorizado para ruta ${req.url} y método ${req.method}`
        })
    }
    next()
}
