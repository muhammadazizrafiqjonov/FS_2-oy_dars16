import { config } from "dotenv"
import express from "express"
import {carsRouter, CustomersRouter, OrderRouter} from "./routers/index.js"
config()

const server = express()
server.use(express.json())

server.use("/cars", carsRouter)
server.use("/customers", CustomersRouter)
server.use("/orders", OrderRouter)


server.listen(process.env.PORT, () => console.log("Server is running"))