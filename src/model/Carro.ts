import Producto from "./Producto";
import { v4 as uuidv4 } from 'uuid'

class Carro {
    private id : string
    private timestamp : number

    constructor(productos: Array<Producto>){
        this.id = uuidv4()
        this.timestamp = Date.now()
    }
}