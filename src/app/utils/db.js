import mongoose from 'mongoose'

export const connection = async() =>{
    try {
      // console.log(process.env.DATABASE)
        await mongoose.connect(process.env.DATABASE);
      } catch (error) {
        throw new Error("Connection Failed")
      }
}