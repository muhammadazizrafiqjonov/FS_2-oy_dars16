import Orders from "../services/orders.js"

class orders{
    constructor(){}


    async GetAllOrders(req, res) {

        const orders = await Orders.GetAllOrders()

        return res.send(orders)
    }

    async CreateOrder(req, res) {

        const newOrder = await Orders.CreateNewOrder(req.body)

        return res.send(newOrder)
    }
}

export default new orders()