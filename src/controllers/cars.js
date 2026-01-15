import Cars from "../services/cars.js"

class cars{
    constructor(){}
    

    async getAllCars(req,res){

        const cars = await Cars.getAllCars()

        return res.send(cars)
    }

    async createCar(req,res){

        const newCar = await Cars.createCar(req.body)
        
        return res.send(newCar)
    }
}

export default new cars()