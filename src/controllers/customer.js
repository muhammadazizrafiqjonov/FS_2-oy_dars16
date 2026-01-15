import Customers from "../services/customer.js"

class customers{
    constructor(){}
    

    async getAllCustomers(req,res){

        const customers = await Customers.getAllCustomers()

        return res.send(customers)
    }

    async createCustomer(req,res){

        const newCustomer = await Customers.createCustomer(req.body)
        
        return res.send(newCustomer)
    }
}

export default new customers()