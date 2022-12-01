import { Server } from "./server/Server"
import config from "./config/Config"
import { databaseInit } from "./config/DBConfig"

const init = async () => {

    await databaseInit?.dbInit()
    Server.listen(config.port, () => 
    console.log(`server listening on port ${config.port}`))      
}

init()

