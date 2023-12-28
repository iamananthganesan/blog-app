import express from 'express'
import { register, login, logout, getUserLists } from '../controller/auth.js'
//Creating instance for the express router
const router = express.Router()
//router with api calling methods liks post, get, put, delete
router.post('/register', register)

router.get('/login', login)

router.get('/logout', logout)

router.get('/users', getUserLists)


export default router