import db from "../database/db.js";
import bcrypt from "bcryptjs";
export const postUser = (req, res) => {
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

export const getUser = (req, res) => {
  try {
    const q = "select * from user";

    db.query(q, (error, result) => {
      if (error) {
        return res
          .status(500)
          .send({ message: "Error while executing query", error });
      }
      return res.status(201).send({ result });
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSingleUser = (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    console.log(parseInt(id));

    const q = "select * from user where id=?";

    db.query(q, [id], (error, result) => {
      if (error) {
        return res
          .status(500)
          .send({ message: "Error while executing query", error });
      }
      return res.status(201).send({ result });
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = (req, res) => {
  try {
    const { id } = req.params;

    const q = "delete from user where id=?";
    db.query(q, [id], (error, result) => {
      if (error) {
        return res
          .status(500)
          .send({ message: "Error while executing query", error });
      }
      return res
        .status(201)
        .send({ message: "User deleted successfully", result });
    });
  } catch (err) {
    console.log(err);
  }
};

export const editUser = (req, res) => {
  try {
    //receving data
    const { name, phone, email, password } = req.body;
    const { id } = req.params;

    if (!name || !phone || !email || !password) {
      return res.send({ message: "All field required" });
    }

    //query
    const q = `update user set name= ?, phone=?, email=?, password=? where id=?`;

    db.query(q, [name, phone, email, password, id], (error, result) => {
      if (error) {
        return res
          .status(500)
          .send({ message: "Error while executing query", error });
      }
      return res
        .status(201)
        .send({ message: "User edited sucessfully.", result });
    });
  } catch (err) {
    console.log(err);
  }
};

export const uploadFile = (req, res) => {
  const file = req.file;
  const { id } = req.params;

  const filePath = `/image/${file.filename}`;

  const q = "update user set image= ? where id=?";

  db.query(q, [filePath, id], (error, result) => {
    if (error) {
      return res
        .status(500)
        .send({ message: "Error while executing query", error });
    }
    return res
      .status(201)
      .send({ message: "User edited sucessfully.", result });
  });

  console.log(file);
};
