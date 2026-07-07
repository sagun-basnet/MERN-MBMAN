import express from "express";
import { getUser, postUser } from "../controller/user.js";

const route = express.Router();

route.get("/user", getUser);
route.post("/user", postUser);
// route.post("/get-user", postUser);

export default route;
