import { connection } from "@/app/utils/db"
import { NextResponse } from "next/server"
import {PostDetails} from "@/models/Post.js"


export const GET = async(req) =>{
    try {
        await connection();

        const posts = await PostDetails.find()
        
        return new NextResponse(JSON.stringify(posts),{status : 200})
    } catch (error) {
        return new NextResponse("Database Error",{status : 500})
    }
    
}