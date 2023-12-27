import mysql2 from "mysql2";

//DB connection from Express
export const database = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin@123',
    database: "blogs"
})