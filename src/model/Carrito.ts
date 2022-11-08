import Producto from "./Producto"
import { v4 as uuidv4 } from 'uuid'
import moment from "moment"

export default class Carrito {
    private id : string
    private timestamp : string
    
    constructor(private productos: Array<Producto> = new Array()){
        this.id = uuidv4()
        this.timestamp = moment().format('YYYY/MM/D hh:mm:ss')
    }

    get getId() : string {
        return this.id
    }

    get getProductos() {
        return this.productos
    }
}