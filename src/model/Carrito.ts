import Producto from "./Producto";
import { v4 as uuidv4 } from 'uuid'

export default class Carrito {
    private id : string
    private timestamp : number

    constructor(private productos: Array<Producto> = []){
        this.id = uuidv4()
        this.timestamp = Date.now()
    }

    get getId() : string {
        return this.id
    }

    get getProductos() : Array<Producto> {
        return this.productos
    }

    addProduct() : boolean {
        return true
    }
}