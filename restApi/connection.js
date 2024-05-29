import mongoose from 'mongoose'



export default async function connectMongoDb (url) {

    return(
    await mongoose.connect(url)
    .then(() => console.log("mongo connected..."))
    .catch(err => console.log("mongo error, ", err))
    )
    
}

