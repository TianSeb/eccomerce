import Producto from "../producto/Producto"

export default class Carrito {
    constructor(private productos : Array<any> = [], 
        private id : string = "" ){
    }

    get getId() : string {
        return this.id
    }

    get getProductos() : Array<Producto> {
        return this.productos
    }

    set setProductos(productos:Array<any>) {
        this.productos = productos
    }

    pushProducto(producto:any) : void {
        this.productos.push(producto)
    }
}