const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

connection.connect((error) => {
  if (error) throw error;

  connection.query("CREATE DATABASE IF NOT EXISTS tasks", (error, results) => {
    if (error) {
      if (error.code === "ER_DB_CREATE_EXISTS") {
        console.log("Database already exists");
      } else {
        throw error; // Handle other potential errors
      }
    } else {
      console.log("Database created or already existed");
    }
  });

  connection.query("USE tasks", (error, results) => {
    if (error) throw error;
  });

  connection.query(
    `CREATE TABLE events ( 
          id INT PRIMARY KEY,
          title VARCHAR(255),
          startDate DATETIME NOT NULL,
          endDate DATETIME NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`,
    (error, results) => {
      if (error) throw error;
      console.log("Events table created or already exists");
    }
  );
});
