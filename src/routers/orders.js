import { Router } from "express";
import OrdersContollers from "../controllers/orders.js"
import validation from "../middleware/validation.js";

const router = Router()


router
    .get("/allOrders", OrdersContollers.GetAllOrders)
    .post("/newOrder", validation, OrdersContollers.CreateOrder)


export default router