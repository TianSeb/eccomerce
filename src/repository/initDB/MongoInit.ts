import mongoose from "mongoose"
import config from "../../config/Config"
import ProductService from "../../services/Product.service"
import CarritoService from "../../services/Carrito.service"


const productos = [
	{
		"nombre": "mayonesa",
		"precio": 200,
		"foto": "https://cdn3.iconfinder.com/data/icons/food-and-beverages-7/64/03_chicken_fries_thigh_food-512.png",
		"id": "73ba180e-1358-4ea6-bcca-18d764451f23",
		"timestamp": "22/12/2022",
		"descripcion": null,
		"codigo":"ez122",
		"stock": 2
	},
	{
		"nombre": "mostaza",
		"precio": 400,
		"foto": "https://cdn3.iconfinder.com/data/icons/food-and-beverages-7/64/09_juice_drink_beverages_orange-512.png",
		"id": "4b59af2e-0d18-441e-9d71-77b37a4b219d",
		"timestamp": "22/12/2022",
		"descripcion": null,
		"codigo":"ez121",
		"stock": 19
	},
	{
		"nombre": "kechu",
		"precio": 500,
		"foto": "https://cdn3.iconfinder.com/data/icons/food-and-beverages-7/64/20_hot_dog_sussage_food-512.png",
		"id": "d4678496-babb-4be3-8fd0-2a4251c107aa",
		"timestamp": "22/12/2022",
		"descripcion": null,
		"codigo":"ez120",
		"stock": 20
	}
]

export const mongoDbInit = async () => {
    try { 
        await mongoose.connect(config.db)
        console.log("DB connected")
        let carritoService = new CarritoService()
        let productoService = new ProductService()

        // await carritoService.createCart()
		// const saveProd = productos.map(p => productoService.createProduct(p))
		// await Promise.all(saveProd)


    } catch (error) {
        console.log(error)
        return error
    } finally {
        // await mongoose.disconnect()
        // console.log("DB disconnected")
    }
}

export default mongoDbInit