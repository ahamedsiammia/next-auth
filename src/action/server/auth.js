"use server"

import { dbConnect } from "@/lib/dbConect";
import bcrypt from 'bcryptjs';
export const postUser =async(payload)=>{
    
    console.log(payload);

    // 1-> check user exit or not 
    const isExit = await dbConnect("users").findOne({email : payload.email});
    if(isExit){
        return {
            success: false,
            message :"user allready exited"
        }
    }
    
    const hashPassword = await bcrypt.hash(payload.password,10);
    // 2-> create a new user
    
    const newUser = {
        ...payload,
        createdAt : new Date().toISOString(),
        role:"user",
        password : hashPassword
    };
    console.log(newUser);

    // 3-> send user to database 

    const result = await dbConnect("users").insertOne(newUser);
    if(result.acknowledged){
        return {
            status:true,
            message:`User created with ${result.insertedId.toString()}`
        }
    }
    else{
        return{
            status : false,
            message:"Something went wrong. please try again"
        }
    }
}