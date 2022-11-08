import IDbRepository from './interfaces/IDbRepository'
import * as fs from 'fs/promises'

export default class DbRepositoryImpl implements IDbRepository {

    private path: string = ''
    createError = require('http-errors')
    fs = require('fs')

    constructor(fileName:string) {
        console.log('Initializing DB')
        this.path = `${__dirname}/database/${fileName}.json`
      
        if(!this.fs.existsSync(this.path)){
            this.fs.writeFileSync(this.path,'[]')
        }
    }

    async getAll(): Promise<Array<Object>> {  
        const database = await this.getDatabase()
        return database
    }

    async getById<T>(id:string): Promise<T> {
        const database = await this.getDatabase()
        let objFound = database.findIndex((obj:any) => obj.id === id )

        return (objFound < 0) ? false : database[objFound]
    }

    async save(item:Object): Promise<boolean> {
        let database = await this.getDatabase()   
        database.push(item)
        let checkSave = await this.saveObjects(database)
        
        return (checkSave) ? checkSave : false
    }

    async edit(id:string, item:any): Promise<Object> {
        let database = await this.getDatabase()  
        let objIndex = await this.findObjectIndex(id)
        
        if(objIndex < 0) throw Error
        
        database[objIndex] = item
        await this.saveObjects(database)
        
        return database[objIndex]
    }

    async deleteById(id:string): Promise<void> {
        const database = await this.getDatabase()
        let objIndex = await this.findObjectIndex(id)
        
        if(objIndex < 0) throw this.createError(404, 'Object not found')
 
        database.splice(objIndex,1)
        await this.saveObjects(database)
    }

    async deleteAll(): Promise<void> {
        await this.saveObjects([])
    }

    async getDatabase() {
        try {
            let database = await fs.readFile(this.path,'utf-8')
            let container = []

            if(database === "") {
                database = await this.fs.promises.writeFile(this.path,'[]')
            } else {
                container = JSON.parse(database)
            }
            return container

        } catch (error) {
            throw this.createError(400, 'Error Base de Datos')
        }
    }

    async saveObjects(data: Array<Object>) : Promise<boolean> {
        try {
            await this.fs.promises.writeFile(this.path, JSON.stringify(data,null,'\t'))
            return true
        } catch (error) {
            throw this.createError(400, 'Error mientras se intentaba guardar los objetos')
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