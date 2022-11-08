import { Server } from "./server/Server"
import config from "./config/Config"
import ProductService from "./services/Product.service"
import Producto from "./model/Producto"

Server.listen(config.port, () => console.log(`server listening on port ${config.port}`))
Server.on("error", (err) => {
    console.log( `El servidor a tenido un error:${err}`)
})

//-- Init Db --//
let prodApi = new ProductService()
let db : any= []

const init = async () => {
    db = await prodApi.getAll()
    if(db.length === 0) {
        await prodApi.save(new Producto("mayonesa","d","a3a","sdf",88,2))
        await prodApi.save(new Producto("mostaneza","d","a4a","sdf",22,1))
        await prodApi.save(new Producto("kechunesa","d","a5a","sdf",44,4))    
     }
}

init()


