import { FirebaseRepository } from "../../../repository/FirebaseRepository";

class ProductsFireDAO extends FirebaseRepository {
    constructor(){
        super('producto')
    }
}

export const productsFireDAO = new ProductsFireDAO()