import mongoose from 'mongoose'

const connection = async() =>{
    try {
        await mongoose.connect(process.env.DATABASE);
      } catch (error) {
        throw new Error("Connection Failed")
      }
}