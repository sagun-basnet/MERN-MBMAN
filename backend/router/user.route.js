import express from "express";
import {
  deleteUser,
  editUser,
  getSingleUser,
  getUser,
  postUser,
  uploadFile,
} from "../controller/user.js";

import { isVerify, isAdmin, isStaff } from "../middleware/isAuth.js";
import upload from "../middleware/multerConfig.js";

const route = express.Router();

route.post("/user", isVerify, isStaff, postUser);
route.get("/user", isVerify, isAdmin, getUser);
route.get("/get-single-user/:id", getSingleUser);
route.delete("/user/:id", deleteUser);
route.put("/user/:id", editUser);
route.post("/upload-image/:id", upload.single("image"), uploadFile);
// route.post("/get-user", postUser);

export default route;
