import express from 'express'
import { Request, Response, NextFunction } from 'express'
import controller from '../controller/Controller'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(controller)
app.use(express.static('public'))

app.use((err:any, req:Request,res:Response,next:NextFunction) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({
        message,
    })
})

export {app as Server}