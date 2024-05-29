import express from 'express'
import {handleCreateNewUser, 
        handleDeleteUserById, 
        handleGetAllUsers, 
        handleGetUserById, 
        handleUpdateUserById} from '../controllers/user.js'

const router = express.Router()

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// server side rendered get all users
// router.get("/user", async (req, res) => {
//     const allDbUsers = await User.find({})
//     const html = `
//      <ul>
//         ${allDbUsers.map((user) => (`<li>${user.userName} - ${user.email}</li>`)).join(" ")}
//      </ul>
//     `
//     return res.status(200).send(html)
// })
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// create user, get all users
router
    .route('/')
    .post(handleCreateNewUser)
    .get(handleGetAllUsers)


/* get particular user, 
   update particular user, 
   delete particular user */
   
router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

export default router