import { fireDb } from "../config/initDB/Firebase"

export class FirebaseRepository {
    private collection:any
    
    constructor(collectionName:string) {
        this.collection = fireDb.collection(collectionName)
        console.log(`INITIALIZING FIREBASE DB`)
    }

    async get(id?:string){
        if(id) {
            const doc = await this.collection.doc(id).get()
            if (!doc.exists) {
                throw new Error(`No se encontró el documento con id ${id}`)
              } else {
                const data = doc.data()
                return { ...data, id }
            }
        }
        const result:any = [];
        const snapshot = await this.collection.get();
        snapshot.forEach((doc:any) => {
            const data = doc.data();
            result.push({ ...data, id: doc.id })
        })
        return result
    }

    async create(data:any) {
        const doc = await this.collection.add({...data})
      
        return { ...data , id: doc.id}
    }

    async update(id:string, data:any) {
        return await this.collection.doc(id).set({...data})
    }

    async delete(id?:string){
        if (id) {
            return await this.collection.doc(id).delete()
        } 
        else {
            const snapshot = await this.collection.get()
            snapshot.forEach((doc:any) => {
                doc.ref.delete()
            })
        }                 
    }
}

