import * as dotenv from 'dotenv'
dotenv.config()

export default {
    port: process.env.PORT || 8080,
    admin: true,
    db: process.env.devDb || 'mongodb://user:pass@mongo:27017/coderhouse',
    persistence: process.env.persistence || 'error'
}
