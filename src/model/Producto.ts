import { v4 as uuidv4 } from 'uuid'
import moment from "moment"
export default class Producto {
    private id : string
    private timestamp : string

    constructor(private nombre:string, private descripcion:string, private codigo:string, 
                    private foto:string, private precio:number, private stock:number) {
        this.id = uuidv4()
        this.timestamp = this.timestamp = moment().format('YYYY/MM/D hh:mm:ss')
    }

    get getId() {
        return this.id
    }
}
