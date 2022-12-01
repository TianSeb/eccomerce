// import knex from "knex"
// import * as dotenv from 'dotenv'
// dotenv.config()
// const srv:any = process.env.mongoLocal
// const db = knex(srv)

// const PRODUCTOS_TABLE = 'productos'
// const CART_TABLE = 'cart'

// const productos = [
// 	{
// 		"nombre": "mayonesa",
// 		"precio": 200,
// 		"foto": "https://cdn3.iconfinder.com/data/icons/food-and-beverages-7/64/03_chicken_fries_thigh_food-512.png",
// 		"id": "73ba180e-1358-4ea6-bcca-18d764451f23",
// 		"timestamp": "22/12/2022",
// 		"descripcion": null,
// 		"codigo":"ez122",
// 		"stock": 2
// 	},
// 	{
// 		"nombre": "mostaza",
// 		"precio": 400,
// 		"foto": "https://cdn3.iconfinder.com/data/icons/food-and-beverages-7/64/09_juice_drink_beverages_orange-512.png",
// 		"id": "4b59af2e-0d18-441e-9d71-77b37a4b219d",
// 		"timestamp": "22/12/2022",
// 		"descripcion": null,
// 		"codigo":"ez121",
// 		"stock": 19
// 	},
// 	{
// 		"nombre": "kechu",
// 		"precio": 500,
// 		"foto": "https://cdn3.iconfinder.com/data/icons/food-and-beverages-7/64/20_hot_dog_sussage_food-512.png",
// 		"id": "d4678496-babb-4be3-8fd0-2a4251c107aa",
// 		"timestamp": "22/12/2022",
// 		"descripcion": null,
// 		"codigo":"ez120",
// 		"stock": 20
// 	}
// ]

// const initProductosTable = async() => {
//     await db.schema.createTable(PRODUCTOS_TABLE, (table) => {
//         table.string('id')
// 		table.string('timestamp')
//         table.string('nombre').notNullable()
// 		table.string('descripcion')
// 		table.string('codigo').notNullable()
// 		table.string('foto')
//         table.bigInteger('precio').notNullable()
// 		table.integer('stock',3)
//     })
//     await db(PRODUCTOS_TABLE).insert(productos)
//     console.log('Tabla productos creada')
// }

// const initCartTable = async () => {
//     await db.schema.createTable(CART_TABLE, (table) => {
//         table.string('id').notNullable()
//         table.string('timestamp')
//     })

//     await db(CART_TABLE).insert({
//         id: "test",
//         timestamp: "12/12/2022"
//     })

//     console.log('Tabla cart creada')
// }

// export const relationalInit = async () => {
//     try { 
//         const productosTableExists = await db.schema.hasTable(PRODUCTOS_TABLE)
//         const cartTableExists = await db.schema.hasTable(CART_TABLE)

//         if(!productosTableExists){
//             console.log('Creando tabla productos')
//             await initProductosTable()
//         }
        
//         if(!cartTableExists){
//             console.log('Creando tabla cart')
//             await initCartTable()
//         }    

//     } catch (error) {
//         console.log('Error Creating Databases')
//         console.log(error)
//     } finally {
//         await db.destroy()
//     }
// }

// export default relationalInit