import USER from '../models/user.js'

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
    if (!user) res.render("login", { err: "Invalid email or password"})

    res.redirect('/') 
} 

export { handleSignUp, handleLogin } 