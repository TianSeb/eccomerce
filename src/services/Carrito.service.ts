import { databaseInit } from "../config/DBConfig";
import ICarritoService from "./interfaces/ICarritoService";
import Carrito from "../model/carrito/Carrito";
import Producto from "../model/producto/Producto";
class CarritoService implements ICarritoService {

    carritoRepository:any 
    constructor(){
        this.carritoRepository = databaseInit?.carritoDAO
    }

    async getCart(idCart:string): Promise<Array<any>> {
        return await this.carritoRepository.get(idCart)
    }

    async createCart(): Promise<any> {
        return await this.carritoRepository.create(new Carrito())
    }

    async deleteCartById(idCart:string): Promise<void> {
        return await this.carritoRepository.delete(idCart)
    }
    
    async getCartProductos(idCart:string): Promise<Array<Producto>> {
        const carrito = await this.carritoRepository.get(idCart)
        return carrito.productos
    }
    
    async saveProductInCart(idCart:string,data:any): Promise<string|any> {
        const carritoObj = await this.carritoRepository.get(idCart)
        
        const {_id,nombre, descripcion, codigo, foto, precio, stock} = data
        const newProduct : Producto = new Producto(nombre, descripcion, codigo, foto, parseInt(precio), parseInt(stock))
        newProduct.setId = _id

        carritoObj.productos.push(newProduct)
        const cartSaved = await this.carritoRepository.update(idCart,carritoObj)

        return `Se guardo el producto con id:${newProduct.getId} en el carrito con id:${cartSaved.id}`
    }
    
    async deleteProductInCart(idCart:string,idProd:string): Promise<string> {
        const carrito = await this.carritoRepository.get(idCart)

        let prodFound = carrito.productos.findIndex((prod:any) => prod.id === idProd)
        if (prodFound < 0) throw new Error("No existe el producto")

        carrito.productos.splice(prodFound,1)

        const prodSaved : any = await this.carritoRepository.update(idCart,carrito)

        return `Se borro el producto con id:${idProd} del carrito con id:${carrito._id}`
    }
}

export const carritoService = new CarritoService()