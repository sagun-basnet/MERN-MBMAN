import db from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  try {
    //receving data
    const { name, phone, email, password } = req.body;

    if (!name || !phone || !email || !password) {
      return res.send({ message: "All field required" });
    }

    const salt = bcrypt.genSaltSync(10);
    const encPassword = bcrypt.hashSync(password, salt);

    // console.log(encPassword);

    //query
    const q = `insert into user(name, phone, email, password) value(?,?,?,?)`;

    db.query(q, [name, phone, email, encPassword], (error, result) => {
      if (error) {
        return res
          .status(500)
          .send({ message: "Error while executing query", error });
      }
      return res
        .status(201)
        .send({ message: "User created sucessfully.", result });
    });
  } catch (err) {
    console.log(err);
  }
};

export const login = (req, res) => {
  try {
    const { email, password } = req.body;

    const q = "select * from user where email = ?";
    db.query(q, [email], (error, result) => {
      if (error) {
        return res
          .status(500)
          .send({ message: "Error while executing query", error });
      }

      if (result.length === 0) {
        return res.send({ message: "User doesnot exist.." });
      }
      //   res.send(result);

      const isPasswordMatch = bcrypt.compareSync(password, result[0].password);

      if (isPasswordMatch) {
        const { password, ...others } = result[0];

        const token = jwt.sign(
          { user_id: result[0].id, role_id: result[0].role_id },
          "secretkey",
        );

        res
          .status(200)
          .send({ message: "Login successfull", token: token, user: others });
      }

      res.status(400).send({ message: "email or password not match" });
    });
  } catch (err) {
    console.log(err);
  }
};
