import Carrito from "../../model/Carrito"
import Producto from "../../model/Producto"

export default interface ICarritoService {

    createCart(item:Object): Promise<string>
    getCart(id:string): Promise<Array<Object> | Producto>
    deleteCartById(id:string): void
    getCartProductos(idCart:string): Promise<Array<Producto>>
    saveProductInCart(idCart:string,item:JSON): Promise<string>
    deleteProductInCart(idCart:string,idProd:string): Promise<string>
}