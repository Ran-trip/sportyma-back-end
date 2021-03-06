const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
  });
  
  connection.connect((err) => {
    if (err) console.log('Mysql connection error: ', err);
    else console.log('Mysql connected');
  });
  
  module.exports = connection;
  