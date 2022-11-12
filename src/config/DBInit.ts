import { dbConnection } from "../repository/Database"

const init = async () => {
	const pg = dbConnection.connection
    const exists = await pg.schema.hasTable('productos')

	const productos = [
		{
			"nombre": "mayonesa",
			"descripcion": "d",
			"codigo": "a3a",
			"foto": "sdf",
			// "precio": 88,
			// "stock": 2,
			"id": "c1f58a4b-64aa-4f83-8d96-3afa8034e4fa",
			"timestamp": "2022/11/9 11:50:29"
		},
		{
			"nombre": "mostaneza",
			"descripcion": "d",
			"codigo": "a4a",
			"foto": "sdf",
			// "precio": 22,
			// "stock": 1,
			"id": "30ec5049-a840-4f36-8cbb-efad255fba2c",
			"timestamp": "2022/11/9 11:50:29"
		},
		{
			"nombre": "kechunesa",
			"descripcion": "d",
			"codigo": "a5a",
			"foto": "sdf",
			// "precio": 44,
			// "stock": 4,
			"id": "8965c15f-ba14-4313-9573-93d94f3bd1a4",
			"timestamp": "2022/11/9 11:50:29"
		}
	]
    if(exists) {
        console.log('tabla existe')
		return
    }

    try {
        const createProdTable = await pg.schema.withSchema('public').createTable('productos',(table:any) =>{
            table.string('id').primary()
            table.string('timestamp')
            table.string('nombre').notNullable()
            table.string('descripcion').notNullable()
            table.string('codigo')
            table.string('foto')
            // table.decimal('precio', 4, 2)
            // table.bigInteger('stock').notNullable()
		})

		await pg('productos').insert(productos)
		// const createProducts = productos.map((prod) => {
		// 	pg('productos').insert(prod)
		// 	console.log('producto insertado');
		// })

		// await Promise.all(createProducts)
    } catch (error) {
        console.log(error);
        
    } finally {
        pg.destroy()
    } 

}

export default init