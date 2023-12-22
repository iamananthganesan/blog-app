import mysql2 from "mysql2";

//DB connection from Express
export const connection = mysql2.createConnection({
host:'localhost',
user:'root',
password:'Admin@123',
db
})
