import pool from "../db/config.js"

class Customers{
    constructor(){}
    

    async getAllCustomers(){

        const customers = await pool.query("select * from customers")

        return customers.rows
    }

    async createCustomer(data){
        const { fullname, contact } = data

        await pool.query("insert into customers(fullname, contact) values($1, $2)", [fullname, contact])
        
        return {
            success:true,
            message:"New customer created successfully"
        }
    } 
}

export default new Customers()