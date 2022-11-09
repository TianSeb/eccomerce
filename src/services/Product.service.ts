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

    async updateProduct(id:string, data:any): Promise<Object> {
        let item : any = await this.productRepository.getById(id)
        if(!item) {
           throw new Error('producto no encontrado')
        }

        
        let {nombre, descripcion, codigo, foto, precio, stock} = data

        item.nombre = nombre || item.nombre
        item.descripcion = descripcion || item.descripcion
        item.codigo = codigo || item.codigo
        item.foto = foto || item.foto
        item.precio = parseInt(precio) || item.precio
        item.stock = parseInt(stock) || item.stock
        item.id = id


        return await this.productRepository.edit(id,item)
    }

    async deleteById(id:string): Promise<void> {
       return await this.productRepository.deleteById(id)
    }

    async deleteAll(): Promise<void> {
        return await this.productRepository.deleteAll()
    }
} 