import User from '../models/user.js' 

const handleGetAllUsers = async (req, res) => {
    // console.log(req.headers);
    const allDbUsers = await User.find({})
    res.set({"X-Server-Owns":"Aashin", "Content-Type" : "json/text", "X-Powered-By" : "Aash-co"})
    // best practices: have to add X before custom headers other than built in, there a lot built in headers
    return res.status(200).send(allDbUsers)
}

const handleGetUserById = async (req, res) => {
    // const reqUser = users.find(t => t.userId === parseInt(req.params.id))
    const reqUser = await User.findById(req.params.id)
    if (!reqUser){
        return res.status(404).send("404 Not Found")
    } 
    res.status(200).send(reqUser)
}

const handleUpdateUserById = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body)

    return res.json({msg: "updated"})
}

const handleDeleteUserById = async (req, res) => {
    // const index = users.findIndex(t => t.userId === parseInt(req.params.id))
    // if (index === -1) {
    //     return res.status(404).send("NOt found")
    // }
    // users.splice(index, 1)
    // return res.status(200).send(users)
    await User.findByIdAndDelete(req.params.id)
    return res.json({msg: "deleted"})
    
}

const handleCreateNewUser = async (req, res) => {
    const body = req.body

    if (!body || !body.userName || !body.email) {
        res.status(400).json({msg: "attach correct details..."})
    }

   const result = await User.create({
        userName: body.userName,
        email: body.email
    })

   return res.status(201).json({msg: "Success",id: result._id})
}

export { handleGetAllUsers, 
         handleGetUserById, 
         handleUpdateUserById, 
         handleDeleteUserById, 
         handleCreateNewUser }