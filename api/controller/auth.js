import { database } from '../database.js';
import bcrypt from 'bcrypt'
//We used to write logics in controllers

export const register = (req, res) => {
    //Check with exisiting user or not 

    const query = "SELECT * FROM users WHERE email = ? OR username = ?"
    database.query(query, [req.body.username, req.body.email, req.body.password], (error, data) => {
        if (error) return res.json(error)
        if (data.length) {
            return res.status(409).json("User already exist")
        }

        const username = req.body.username;
        const email = req.body.email
        const password = req.body.password

        //Hasing the password and create new user
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);


        const query = `INSERT INTO users 
        (username, email, password) 
        VALUES ("${username}", "${email}", "${hash}")`;

        const values = [
            req.body.username,
            req.body.email,
            hash
        ]

        database.query(query, values, (error, data) => {
            if (error) res.json(error)
            return data.status(200).json('User has been created')
        })
    })
}

export const login = (req, res) => {
    res.json("hey")
}

export const logout = (req, res) => {
    res.json("logout")
}


export const getUserLists = (req,res) =>{
    const query = " SELECT * FROM users"

    database.query(query,(error, data)=>{
        if(error) res.json()
        if (data.length) {
            return res.json(data)
        }
    })
}