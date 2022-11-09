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
        return await this.serviceRepository.deleteById(idCart)
    }

    async getAllCarts(): Promise<Array<any>> {
       return await this.serviceRepository.getAll()
    }
    
    async getCartProductos(idCart:string): Promise<Array<Producto>> {
        const carrito = await this.getCartFromDb(idCart)
        return carrito.getProductos
    }
    
    async saveProductInCart(idCart:string,data:any): Promise<string> {
        const carrito = await this.getCartFromDb(idCart)
        
        const {nombre, descripcion, codigo, foto, precio, stock} = data
        const newProduct = new Producto(nombre, descripcion, codigo, foto, parseInt(precio), parseInt(stock))

        carrito.getProductos.push(newProduct)
        const prodSaved : any = await this.serviceRepository.edit(idCart,carrito)

        return `Se guardo el producto con id:${newProduct.getId} en el carrito con id:${prodSaved.getId}`
    }
    
    async deleteProductInCart(idCart:string,idProd:string): Promise<string> {
        const carrito = await this.getCartFromDb(idCart);

        let prodFound = carrito.getProductos.findIndex((prod:any) => prod.id === idProd)
        if (prodFound < 0) throw new Error("No existe el producto")

        carrito.getProductos.splice(prodFound,1)

        const prodSaved : any = await this.serviceRepository.edit(idCart,carrito)

        return `Se borro el producto con id:${idProd} del carrito con id:${carrito.getId}`
    }

    private async getCartFromDb(idCart: string) {
        const newCart = new Carrito();
        const cartData: JSON = await this.serviceRepository.getById(idCart);
        if (!cartData)
            throw Error("Error while retrieving Carritos Database");

        Object.assign(newCart, cartData);
        return newCart;
    }
}