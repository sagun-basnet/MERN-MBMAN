import express from "express";
import userRoute from "./router/user.route.js";

const app = express();
app.use(express.json());

app.use("/api", userRoute); //  /user/get-user

app.listen(5000, () => {
  console.log("Server is running on port 127.0.0.1:5000");
});
