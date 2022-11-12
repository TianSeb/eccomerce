import knex from "knex";
import dbConfig from '../config/knexfile';

class Database {

    connection:any
    
    constructor() {
        const environment = 'development'
        console.log(`INITIALIZING ${environment} DB`)
        const options = dbConfig[environment]
        this.connection = knex(options)
    }
}

export const dbConnection = new Database()

