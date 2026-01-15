import Joi from "joi"
// import customer from "../services/customer"


export  const carsScheme = Joi.object({
    model:Joi.string().alphanum().required(),
    price:Joi.number().required(),
    year:Joi.number().min(2018).max(2026)
})

export const customerScheme = Joi.object({
    fullname:Joi.string().required(),
    contact:Joi.string().required()
})

export const orderScheme = Joi.object({
    customer_id:Joi.number().required(),
    car_id:Joi.number().required(),
    month_count:Joi.number().required(),
    start_date:Joi.date().required(),
    end_date:Joi.date().required(),
    payment_date:Joi.number().required(),
    start_price:Joi.number().required()
})