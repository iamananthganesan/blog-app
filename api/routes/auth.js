import express from 'express'
import { auth } from '../controller/auth.js'
const router = express.Router()

router.get('/auth', auth)

export default router