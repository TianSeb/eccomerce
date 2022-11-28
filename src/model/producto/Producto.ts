export default class Producto {
    private id : string

    constructor(private nombre:string, private descripcion:string, private codigo:string, 
                    private foto:string, private precio:number, private stock:number) {
        this.id = ""
    }

    get getId() {
        return this.id
    }
}
