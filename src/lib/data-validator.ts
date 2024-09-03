import { Response } from "express";
import { validate } from "class-validator";

async function dataValidate (data:any, res: Response) {
    console.log(data.email)

    try {
        const error = await validate(data);
        console.log(error);

        if (error.length > 0) {
            console.log(error);
            res.status(400).send({
                message: "Json sent doesn't fit validation requirements"
            });
            return 1;
        }
        
    } catch (error) {
        res.status(400).send({
            message: "Json sent can't be parsed"
        });
        return 2;
    }

    return 0;
};

export default dataValidate;