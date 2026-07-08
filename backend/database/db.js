import mysql from "mysql2";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "mdb",
});

if (!db.connect) {
  console.log("Error while connecting DB");
}

export default db;
