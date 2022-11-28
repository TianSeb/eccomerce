import mongoose from "mongoose"
import { MongoRepository } from "../../../repository/MongoRepository"


const carritoCollectionName = 'carrito';

const carritoSchema = new mongoose.Schema({
    productos: { type: [], required: true },
},
{ timestamps: true, versionKey: false })

class CartMongoDAO extends MongoRepository {
    constructor() {
        super(carritoCollectionName,carritoSchema)
    }
}

export const cartMongoDAO = new CartMongoDAO()