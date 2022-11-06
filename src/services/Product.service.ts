import DbRepositoryImpl from "../repository/DbRepositoryImpl";
import IDbRepository from "../repository/interfaces/IDbRepository";
import IProductservice from "./interfaces/IProductService";
import Producto from "../model/Producto";

export default class ProductService implements IProductservice {
    
    private productRepository:IDbRepository

    constructor(){
        this.productRepository = new DbRepositoryImpl('productos')
     }

    async getAll(): Promise<Array<Object>> {
        return await this.productRepository.getAll()
    }

    async getById<Producto>(id:string): Promise<Producto> {
        return await this.productRepository.getById(id)
    }

    async save(data:any): Promise<string> {
        let {nombre, descripcion, codigo, foto, precio, stock} = data

        let newProduct = new Producto(nombre, descripcion, codigo, foto, parseInt(precio), parseInt(stock))
        let checkSave = await this.productRepository.save(newProduct)

        return (checkSave) ? `El producto con id ${newProduct.getId} ah sido creado` : "Error"
    }

    async updateProduct(id:string, data:Object): Promise<Object> {
        return await this.productRepository.edit(id,data)
    }

    async deleteById(id:string): Promise<void> {
        await this.productRepository.deleteById(id)
    }

    async deleteAll(): Promise<void> {
        await this.productRepository.deleteAll()
    }
} 