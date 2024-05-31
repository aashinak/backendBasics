import USER from '../models/user.js'
import { v4 as uuidv4 } from 'uuid';
import { setUser } from '../service/auth.js';


const handleSignUp = async (req, res) => {
    const {name, email, password} = req.body

    await USER.create({
        name,
        email,
        password
    })

    res.redirect('/')
}

const handleLogin = async (req, res) => {
    const {email, password} = req.body

    const user = await USER.findOne({email, password})
    if (!user) return res.render("login", { err: "Invalid email or password"})

    const sessionId = uuidv4()    
    setUser(sessionId, user)
    res.cookie("uid", sessionId)
    return res.redirect('/') 
} 

export { handleSignUp, handleLogin } 