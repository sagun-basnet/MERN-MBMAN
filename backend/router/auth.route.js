import express from "express";
import { login } from "../controller/auth.js";

const route = express.Router();

route.post("/login", login);

export default route;
