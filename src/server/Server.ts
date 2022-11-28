import express from 'express'
import http from 'http'
import {controller} from '../controller/Controller'
import { errorHandlerfunction } from '../utils/Utils'

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(controller)
app.use(errorHandlerfunction)
const httpServer = new http.Server(app)

export {httpServer as Server}