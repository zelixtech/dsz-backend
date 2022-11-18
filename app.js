const express = require('express')
const app = express()
require('dotenv').config()
const mysql = require('mysql');


const pool = mysql.createPool({
  connectionLimit: process.env.DB_CONNECTION_LIMIT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
});

// app.get("/", (req, res) => {
//   try {
//     pool.getConnection((err, connection) => {
//       if (err) throw err;
//       console.log('connected as id ' + connection.threadId);
//       connection.query('SELECT * from student LIMIT 1', (err, rows) => {
//         connection.release(); // return the connection to pool
//         if (err) throw err;
//         console.log('The data from student table are: \n');
//         res.send("HELLO")
//       });
//     });
//   }
//   catch (err) {
//     console.log(err);
//   }
// });

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
