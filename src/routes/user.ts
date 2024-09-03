import { Router } from "express";
import { signUp, getUsers } from "../controllers/user";

const userRoutes : Router = Router();

userRoutes.get("/users", getUsers); // only works in dev mode

userRoutes.post("/signup", signUp);

export default userRoutes;