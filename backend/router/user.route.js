import express from "express";
import { postUser } from "../controller/user.js";

const route = express.Router();

route.post("/user", postUser);
// route.post("/get-user", postUser);

export default route;
