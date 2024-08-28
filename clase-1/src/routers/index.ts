import { Router } from "express";
import PostRegister from "../controller/POST/PostRegister";

export const route = Router();

route.post("/Register", PostRegister);
