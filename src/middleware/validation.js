import { carsScheme } from "../utilits/validations.js"
import { customerScheme } from "../utilits/validations.js"
import { orderScheme } from "../utilits/validations.js";

export default async (req, res, next) => {

    if(req.method == "POST" && req.url == "/newCar"){
        const { error }  = await carsScheme.validate(req.body);

        if (error) {
            return res.status(400).json({
                status: 400,
                message: error.details[0].message
            });
        }
        next();
    }

    else if (req.method == "POST" && req.url == "/newCustomer"){
        const { error } = await customerScheme.validate(req.body);

        if(error) {
            return res.status(400).json({
                status:400,
                message: error.details[0].message
            });
        }
        next();
    }

    else if (req.method == "POST" && req.url == "/newOrder"){
        const { error } = await orderScheme.validate(req.body);

        if(error) {
            return res.status(400).json({
                status:400,
                message: error.details[0].message
            });
        }
        next();
    }

};
