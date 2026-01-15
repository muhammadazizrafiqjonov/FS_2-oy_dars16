import pool from "../db/config.js";

class Orders{
    constructor(){}

    async GetAllOrders(){

        const orders = await pool.query("select * from orders")

        return orders.rows
    }

    async CreateNewOrder(data){
        
        const { customer_id, car_id, month_count, start_date, end_date, payment_date, start_price } = data;
        
        await pool.query("insert into orders(customer_id, car_id, month_count, start_date, end_date, payment_date, start_price) values($1,$2,$3,$4,$5,$6,$7)",[customer_id,car_id,month_count,start_date,end_date,payment_date,start_price] )

        return {
            success:true,
            message:"New order successfully created"
        }
    }
}

export default new Orders()