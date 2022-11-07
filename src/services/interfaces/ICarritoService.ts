import Carrito from "../../model/Carrito"
import Producto from "../../model/Producto"

export default interface ICarritoService {

    createCart(): Promise<void>
    deleteCartById(idCart:string): void
    getAllCarts(): Promise<Array<any>>
    getCartProductos(idCart:string): Promise<Array<Producto>>
    saveProductInCart(idCart:string,item:JSON): Promise<void>
    deleteProductInCart(idCart:string,idProd:string): Promise<void>
}