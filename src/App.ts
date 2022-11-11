import { Server } from "./server/Server"
import config from "./config/Config"
import ProductService from "./services/Product.service"
import init from "./config/DBConfig"

Server.listen(config.port, () => console.log(`server listening on port ${config.port}`))
Server.on("error", (err) => {
    console.log( `El servidor a tenido un error:${err}`)
})

//-- Init Db --//
let prodApi = new ProductService()
init()
