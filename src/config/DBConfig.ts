import { cartMongoDAO } from "../model/carrito/DAO/CartMongoDAO";
import { productosMongoDAO } from "../model/producto/DAO/ProductsMongoDao";
import { productsFireDAO } from "../model/producto/DAO/ProductsFireDAO";
import { cartFireDAO } from "../model/carrito/DAO/CartFireDAO";
import mongoDbInit from "./initDB/MongoInit";

enum TipoPersistencia {
    Memoria = 'MEM',
    FileSystem = 'FS',
    MYSQL = 'MYSQL',
    SQLITE3 = 'SQLITE3',
    LocalMongo = 'LOCAL-MONGO',
    MongoAtlas = 'MONGO-ATLAS',
    Firebase = 'FIREBASE',
}

class ModelFactory {
    static get( tipo: TipoPersistencia ) {    

        switch(tipo) {    
          case TipoPersistencia.MongoAtlas:
            console.log("Retornando instancia MongoAtlas");
            
            return {
                productDAO:productosMongoDAO,
                carritoDAO:cartMongoDAO,
                dbInit: mongoDbInit
            }

          case TipoPersistencia.Firebase:
            console.log("Retornando instancia Firebase");
            const mock = async () => {
              return 'firebase is already connected'
            }
            return {
                productDAO:productsFireDAO,
                carritoDAO:cartFireDAO,
                dbInit: mock
            }  
            
          default: 
            console.log("Retornando instancia por defecto");
            return null
        }
      }
}

export const databaseInit = ModelFactory.get(TipoPersistencia.MongoAtlas)