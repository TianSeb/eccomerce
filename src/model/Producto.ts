import { v4 as uuidv4 } from 'uuid'

export default class Producto {
    private id : string
    private timestamp : number

    constructor(private nombre:string, private descripcion:string, private codigo:string, 
                    private foto:string, private precio:number, private stock:number) {
        this.id = uuidv4()
        this.timestamp = Date.now()
    }

    get getId() {
        return this.id
    }
}
