import { Server } from "./server/Server"
import config from "./config/Config"
import initDb from "./repository/DBInit"

const init = async () => {
    await initDb()
    Server.listen(config.port, () => console.log(`server listening on port ${config.port}`))
    Server.on("error", (err) => {
        console.log( `El servidor a tenido un error:${err}`)
    })
}

init()

