require("dotenv").config();

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


// mysql connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: 'c484'
});

//connect to db
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});


//QUERIES
connection.query('SELECT * FROM `games`', function (error, results, fields) {
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
  console.log("Query done")
});


// localhost:5000/
app.get('/', (request, response) => {
  return response.json("From backend");
})

//has the json for all the games
app.get('/games_json', (request, response) => {
  connection.query('SELECT * FROM `games`', function (error, results, fields) {
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
    if (error) response.json('problem w db query')
    response.json(results)
  });
})

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});