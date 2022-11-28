//import { prodDatabase } from "../repository/RelationalRepository";
import { productosMongoDAO } from "../model/producto/DAO/ProductsMongoDao";
import IProductservice from "./interfaces/IProductService";
import Producto from "../model/producto/Producto";
export default class ProductService implements IProductservice {
    
    connection:any 
    constructor(){
        this.connection = productosMongoDAO
    }

    async get<Producto>(id:string): Promise<Array<Object> | Producto | any> {
        return await this.connection.get(id)
    }

    async createProduct(data:any): Promise<string|any> {
        let {nombre, descripcion, codigo, foto, precio, stock} = data
        let newProduct = new Producto(nombre, descripcion, codigo, foto, parseInt(precio), parseInt(stock))

        return await this.connection.create(newProduct)
    }

    async updateProduct(id:string, data:any): Promise<Object> {
        return await this.connection.update(id,data)
    }

    async deleteById(id:string): Promise<void> {
       return await this.connection.delete(id)
    }
} 