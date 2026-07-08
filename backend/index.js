import express from "express";
import userRoute from "./router/user.route.js";
import db from "./database/db.js";

const app = express();
app.use(express.json());

app.use("/api", userRoute); //  /api/user

app.listen(5000, () => {
  console.log("Server is running on port 127.0.0.1:5000");
});
