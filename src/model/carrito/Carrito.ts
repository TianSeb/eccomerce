import Producto from "../producto/Producto"

export default class Carrito {
    private id : string

    constructor(private productos: Array<Producto> = new Array()){
        this.id = ""
    }

    get getId() : string {
        return this.id
    }

    get getProductos() {
        return this.productos
    }
}