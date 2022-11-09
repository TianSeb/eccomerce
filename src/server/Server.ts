import express from 'express'
import {controller} from '../controller/Controller'

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(controller)

export {app as Server}