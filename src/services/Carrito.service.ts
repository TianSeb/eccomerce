import { dbConnection } from "../repository/Database";
import ICarritoService from "./interfaces/ICarritoService";
import Carrito from "../model/Carrito";
import Producto from "../model/Producto";

export default class CarritoService implements ICarritoService {

    private TABLE_NAME = 'carritos'
    connection:any 
    constructor(){
        this.connection = dbConnection.connection
    }

    async createCart(): Promise<any> {
        return await this.connection(this.TABLE_NAME).insert(new Carrito())
    }

    async deleteCartById(idCart:string): Promise<void> {
        return await this.connection(this.TABLE_NAME).where('id',idCart).del()
    }

    async getCart(idCart:string): Promise<Array<any>> {
       if(idCart) return this.connection(this.TABLE_NAME).where('id',idCart)

       return await this.connection(this.TABLE_NAME)
    }
    
    async getCartProductos(idCart:string): Promise<Array<Producto>> {
        const carrito : Carrito = await this.connection(this.TABLE_NAME).where('id',idCart)
        return carrito.getProductos
    }
    
    async saveProductInCart(idCart:string,data:any): Promise<string> {
        const carrito = await this.connection(this.TABLE_NAME).where('id',idCart)
        
        const {nombre, descripcion, codigo, foto, precio, stock} = data
        const newProduct = new Producto(nombre, descripcion, codigo, foto, parseInt(precio), parseInt(stock))

        carrito.getProductos.push(newProduct)
        const prodSaved : any = await this.connection(this.TABLE_NAME).insert(carrito)

        return `Se guardo el producto con id:${newProduct.getId} en el carrito con id:${prodSaved.getId}`
    }
    
    async deleteProductInCart(idCart:string,idProd:string): Promise<string> {
        const carrito = await this.connection(this.TABLE_NAME).where('id',idCart)

        let prodFound = carrito.getProductos.findIndex((prod:any) => prod.id === idProd)
        if (prodFound < 0) throw new Error("No existe el producto")

        carrito.getProductos.splice(prodFound,1)

        const prodSaved : any = await this.connection (this.TABLE_NAME).insert(carrito)

        return `Se borro el producto con id:${idProd} del carrito con id:${carrito.getId}`
    }
}