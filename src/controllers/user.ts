import { Response, Request, NextFunction } from "express";
import { User } from "../models/user.entity";
import * as bcrypt from "bcrypt";
import config from "../config";
import dataValidate from "../lib/data-validator";

const ENV = config.ENV

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(ENV !== "dev") {
            return res.status(401).send({
                message: "Unauthorized"
            })
        }

        const users = await User.find();
        return res.status(200).json({ users})
    } catch (error) {
        next(error)
    }
}

const signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body as Pick<User, "email" | "password">;

        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(body.password, salt)

        const user = new User();
        user.email = body.email;
        user.password = hashPassword;

        const error = await dataValidate(user, res)

        await user.save();

        if (error === 0) res.status(201).json(body);
        
    } catch (error) {
        next(error)
    }
}

export { getUsers, signUp}