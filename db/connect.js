const mysql = require("mysql2/promise");

//this function is used to connect db and query the database
async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "tasks",
    user: "root",
    password: "",
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error) {
    console.log(error);
    dbconnection.end();
    return { error };
  }
}

module.exports = { query };
