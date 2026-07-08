import db from "../database/db.js";
export const postUser = (req, res) => {
  try {
    //receving data
    const { name, phone, email, password } = req.body;

    if (!name || !phone || !email || !password) {
      return res.send({ message: "All field required" });
    }

    //query
    const q = `insert into user(name, phone, email, password) value(?,?,?,?)`;

    db.query(q, [name, phone, email, password], (error, result) => {
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
