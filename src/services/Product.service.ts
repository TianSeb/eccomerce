import { prodDatabase } from "../repository/DbRepsitory";
import IProductservice from "./interfaces/IProductService";
import Producto from "../model/Producto";
export default class ProductService implements IProductservice {
    
    connection:any 
    constructor(){
        this.connection = prodDatabase
    }

    async get<Producto>(id:string): Promise<Array<Object> | Producto | any> {
        return id ? await this.connection.where('id',id) : await this.connection
    }

    async createProduct(data:any): Promise<string|any> {
        let {nombre, descripcion, codigo, foto, precio, stock} = data
        let newProduct = new Producto(nombre, descripcion, codigo, foto, parseInt(precio), parseInt(stock))

        return await this.connection.insert(newProduct)
    }

    async updateProduct(id:string, data:any): Promise<Object> {
        // let item : any = await this.productRepository.get(this.TABLE_NAME,id)
        // if(!item) {
        //    throw new Error('producto no encontrado')
        // }

        
        // let {nombre, descripcion, codigo, foto, precio, stock} = data

        // item.nombre = nombre || item.nombre
        // item.descripcion = descripcion || item.descripcion
        // item.codigo = codigo || item.codigo
        // item.foto = foto || item.foto
        // item.precio = parseInt(precio) || item.precio
        // item.stock = parseInt(stock) || item.stock
        // item.id = id
        return await this.connection.where('id',id).update(data)
    }

    async deleteById(id:string): Promise<void> {
       return await this.connection.where('id',id).del()
    }
} 