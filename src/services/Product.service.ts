import { databaseInit } from "../config/DBConfig";
import IProductservice from "./interfaces/IProductService";
import Producto from "../model/producto/Producto";
class ProductService implements IProductservice {
    
    repository:any 
    constructor(){
        this.repository = databaseInit?.productDAO
    }

    async get<Producto>(id:string): Promise<Array<Object> | Producto | any> {
         return await this.repository.get(id)    
    }

    async createProduct(data:any): Promise<string|any> {
        let {nombre, descripcion, codigo, foto, precio, stock} = data
        let newProduct = new Producto(nombre, descripcion, codigo, foto, parseInt(precio), parseInt(stock))

        return await this.repository.create(newProduct)
    }

    async updateProduct(id:string, data:any): Promise<Object> {
        return await this.repository.update(id,data)
    }

    async deleteById(id:string): Promise<void> {
       return await this.repository.delete(id)
    }
} 

export const productService = new ProductService()