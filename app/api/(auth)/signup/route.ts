import prisma from "@/app/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";


export async function POST(req:Request){

    try{
        const body = await req.json(); 

        const name = body.name; 
        const password = body.password;
        const email = body.email;
    
        const user = await prisma.user.findUnique({
            where:{
                email:email
            }
        })
    
        if(user){
            return NextResponse.json({
                status:404,
                message:"User already exists "
            })
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await prisma.user.create({
            data:{
                name, 
                password:hashedPassword,
                email,
            }
        })
    
        return NextResponse.json({
            status:200,
            message:"User created successfully",
    })
    }catch(error){
        return NextResponse.json(
            {   
                error:error,
                message:"ERROR SIGNUP"

            },{status:500})
    }

    

}