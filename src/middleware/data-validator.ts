import { Request, Response, NextFunction } from "express";
import { User } from "../models/user.entity";
import { validate } from "class-validator";

const passValues = (data: any, record:any) => {
    const target = new record();
    for (const [key, value] of Object.entries(data)) {
        target.key = data.key;
    }
    return target;
  };

async function dataValidate (
    req: Request,
    res: Response,
    next: NextFunction,
) {
    console.log("is validating")
    let data = req.body;

    const route = req.path;

    switch (route) {
        case "/signup":
            data = passValues(data, User);
            break;
    }

    try {
        const error = await validate(data);
        console.log(error);

        if (error.length > 0) {
            console.log(error);
            res.status(400).send({
                message: "Json sent doesn't fit validation requirements"
            });
            return;
        }
        
    } catch (error) {
        res.status(400).send({
            message: "Json sent can't be parsed"
        });
        return;
    }
    
    next();
};

export default dataValidate;