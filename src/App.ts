import { Server } from "./server/Server"
import config from "./config/Config"
import initDb from "./repository/initDB/RelationalInit"
import mongoDbInit from "./repository/initDB/MongoInit"

const init = async () => {
    await mongoDbInit()
    Server.listen(config.port, () => 
    console.log(`server listening on port ${config.port}`))      
}

init()

