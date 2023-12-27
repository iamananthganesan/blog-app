import express from 'express'
import { register, login, logout, getUserLists } from '../controller/auth.js'


const router = express.Router()

router.post('/register', register)

router.get('/login', login)

router.get('/logout', logout)

router.get('/users', getUserLists)


export default router