import { FirebaseRepository } from "../../../repository/FirebaseRepository"

class CartFireDAO extends FirebaseRepository{
    constructor(){
        super('carrito')
    }
}

export const cartFireDAO = new CartFireDAO()