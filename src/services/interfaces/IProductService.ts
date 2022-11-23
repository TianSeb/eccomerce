import Producto from "../../model/Producto"
export default interface IProductservice {
    get(id:string): Promise<Array<Object> | Producto>
    createProduct(item:Object): Promise<string>
    updateProduct(id:string, item:Object): Object
    deleteById(id:string): void
}