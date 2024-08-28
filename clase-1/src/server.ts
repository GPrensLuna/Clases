import express, { json } from "express";
import { route } from "./routers";

import cors from "cors";
export const server = express();

server.use(json());
server.use(cors());

server.use("/", route);
