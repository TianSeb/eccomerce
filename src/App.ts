import { Server } from "./server/Server"
import config from "./config/Config"
import ProductService from "./services/Product.service"
import init from "./config/DBInit"
import CarritoService from "./services/Carrito.service"
import { dbConnection } from "./repository/Database"

Server.listen(config.port, () => console.log(`server listening on port ${config.port}`))
Server.on("error", (err) => {
    console.log( `El servidor a tenido un error:${err}`)
})

//-- Init Db --//
init()
