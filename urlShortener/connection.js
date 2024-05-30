import mongoose from 'mongoose'

const connectToMongoDb = async (url) => {
    return ( 
     await mongoose.connect(url)
    .then(() => console.log("Connected with mongodb"))
    .catch(err => console.log("MongoDb error: ",err))
    )
}

export default connectToMongoDb 