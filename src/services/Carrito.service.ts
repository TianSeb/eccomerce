import DbRepositoryImpl from "../repository/DbRepositoryImpl";
import IDbRepository from "../repository/interfaces/IDbRepository";
import ICarritoService from "./interfaces/ICarritoService";
import Carrito from "../model/Carrito";
import Producto from "../model/Producto";

export default class CarritoService implements ICarritoService {

    private serviceRepository: IDbRepository

    constructor(){
        this.serviceRepository = new DbRepositoryImpl('carritos')
    }

    async createCart(): Promise<any> {
        let carrito = new Carrito()
        let check = await this.serviceRepository.save(carrito)

        return (check) ? carrito.getId : new Error("Error al crear carrito")
    }

    async deleteCartById(idCart:string): Promise<void> {
        await this.serviceRepository.deleteById(idCart)
    }

    async getAllCarts(): Promise<Array<any>> {
       return await this.serviceRepository.getAll()
    }
    
    async getCartProductos(idCart:string): Promise<Array<Producto>|any> {
        let carrito:Carrito = await this.serviceRepository.getById(idCart)
        if(!carrito) throw new Error("El carrito no existe")

        return carrito.getProductos
    }
    
    async saveProductInCart(idCart:string,data:any): Promise<void> {
        let cart : Carrito = await this.serviceRepository.getById(idCart)
        console.log(cart);
        let array = cart.getProductos
        console.log(array);
        
        
        if(!cart) throw Error

        let {nombre, descripcion, codigo, foto, precio, stock} = data
        let newProduct = new Producto(nombre, descripcion, codigo, foto, parseInt(precio), parseInt(stock))
        cart.getProductos.push(newProduct)

        await this.serviceRepository.save(cart)
    }
    
    async deleteProductInCart(idCart:string,idProd:string): Promise<void> {
        let cart : Array<any> = await this.serviceRepository.getById(idCart)
        if(!cart) throw new Error("No existe el carrito")

        let prodFound = cart.findIndex(prod => prod.id === idProd)
        if (prodFound < 0) throw new Error("No existe el producto")

        cart.splice(prodFound,1)

        await this.serviceRepository.save(cart)
    }
}