import { connection } from "@/app/utils/db"
import { NextResponse } from "next/server"
import {PostDetails} from "@/models/Post.js"


export const GET = async(req,{params}) =>{
    console.log(params)
    const {id} = params
    try {
        await connection();

        const post = await PostDetails.findById({_id : id})
        
        return new NextResponse(JSON.stringify(post),{status : 200})
    } catch (error) {
        return new NextResponse("Database Error",{status : 500})
    }
    
}