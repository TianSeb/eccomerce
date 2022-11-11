import Config from "./Config";
const pg = require('knex')(Config.db)

const init = async () => {
    const exists = await pg.schema.hasTable('productos')
    if(exists) return

    try {
        const createTable = await pg.schema.withSchema('public').createTable('productos',(table:any) =>{
            table.increments('id').primary()
            table.string('timestamp')
            table.string('nombre')
            table.string('descripcion')
            table.string('codigo')
            table.string('foto')
            table.decimal('precio')
            table.bigInteger('stock')
            })
    } catch (error) {
        console.log(error);
        
    } finally {
        pg.destroy()
    } 
}

export default init
