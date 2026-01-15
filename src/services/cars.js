import pool from "../db/config.js"

class Cars{
    constructor(){}
    

    async getAllCars(){

        const cars = await pool.query("select * from cars")

        return cars.rows
    }

    async createCar(data){
        const { model, price, year } = data

        await pool.query("insert into cars(model, price, year) values($1, $2, $3)", [model,price,year])
        
        return {
            success:true,
            message:"New car created successfully"
        }
    } 
}

export default new Cars()