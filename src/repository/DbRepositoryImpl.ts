import IDbRepository from './interfaces/IDbRepository'
import knex, { Knex } from "knex";
import Config from '../config/Config';

export default class DbRepositoryImpl implements IDbRepository {

    db:Knex
    createError = require('http-errors')

    constructor(options:Object) {
        console.log('Initializing DB')
        this.db = knex(Config.db)
    }

    async getAll(): Promise<Array<Object>> {  
        try {
            const database = await this.getDatabase()
            return database
        } catch (error) {
            return this.createError(404,"Not Found")
        }
    }

    async getById<T>(id:string): Promise<T> {
        try {
            const database = await this.getDatabase()
            let objFound = database.findIndex((obj:any) => obj.id === id )

            return (objFound < 0) ? this.createError(404,"Not Found") : database[objFound]
        } catch (error) {
            return this.createError(404,"Not Found")
        }
    }

    async save(item:Object): Promise<boolean> {
        try {
            let database = await this.getDatabase()   
            database.push(item)
            let checkSave = await this.saveObjects(database)
            
            return (checkSave) ? checkSave : false
        } catch (error) {
            return  this.createError(500,"Error While Saving")
        }
    }

    async edit(id:string, item:any): Promise<Object> {
        try {
            let database = await this.getDatabase()  
            let objIndex = await this.findObjectIndex(id)
            
            if(objIndex < 0) return "Not Found"
            
            database[objIndex] = item
            await this.saveObjects(database)
            
            return database[objIndex]
        } catch (error) {
            return  this.createError(500,"Error While Saving")
        }
    }

    async deleteById(id:string): Promise<string> {
        try {
            const database = await this.getDatabase()
            let objIndex = await this.findObjectIndex(id)
            
            if(objIndex < 0) return this.createError(404, 'Object not found')
     
            database.splice(objIndex,1)
            await this.saveObjects(database)
            return `Object with id:${id} deleted`
        } catch (error) {
            return  this.createError(500,"Error While Deleting")
        }

    }

    async deleteAll(): Promise<string> {
        try {
            await this.saveObjects([])
            return 'All Objects Deleted'
        } catch (error) {
            return  this.createError(500,"Error While Deleting")
        }
    }

    async getDatabase() {
        try {
            
        } catch (error) {
            return this.createError(500, 'Error Base de Datos')
        }
    }

    async saveObjects(data: Array<Object>) : Promise<boolean> {
        try {
            
            return true
        } catch (error) {
            throw this.createError(500, 'Error mientras se intentaba guardar los objetos')
        }
    }

    async findObjectIndex(id:string): Promise<number> {
        try {
            const database = await this.getDatabase()
            return database.findIndex((obj:any) => obj.id === id )
        } catch (error) {
            throw this.createError(404, 'Object not found')
        }
    }
}