import Producto from "../../model/Producto"

export default interface IProductservice {
    getAll(): Promise<any[]>
    getById(id:string): Promise<Producto>
    save(item:Object): Promise<string>
    updateProduct(id:string, item:Object): Object
    deleteById(id:string): void
    deleteAll(): void
}