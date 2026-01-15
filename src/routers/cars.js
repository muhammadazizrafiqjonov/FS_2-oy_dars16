import { Router } from "express";
import carsContollers from "../controllers/cars.js"
import validation from "../middleware/validation.js"; 

const router = Router()


router
    .get("/allCars", carsContollers.getAllCars)
    .post("/newCar", validation, carsContollers.createCar)


export default router