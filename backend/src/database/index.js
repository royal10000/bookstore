import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { DB_NAME } from '../constant/constant.js'
dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("database is connected successfully")
    } catch (error) {
        console.log('unable to connect with database ', error)
    }

}

export default connectDB