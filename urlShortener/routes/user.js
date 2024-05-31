import express from 'express'
import {handleLogin, handleSignUp} from '../controllers/user.js'
const router = express.Router()

router.post('/', handleSignUp)
router.post('/login', handleLogin)

export default router