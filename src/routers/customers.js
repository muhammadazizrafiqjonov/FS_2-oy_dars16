import { Router } from "express";
import customersContollers from "../controllers/customer.js"
import validation from "../middleware/validation.js";

const router = Router()


router
    .get("/allCustomers", customersContollers.getAllCustomers)
    .post("/newCustomer", validation, customersContollers.createCustomer)


export default router