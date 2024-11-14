import prisma from "@/app/db";
import { error } from "console";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function POST(req:Request){
    try{
        const session =  await getServerSession();                         

    // if(!session){
    //     return NextResponse.json({
    //         message:"User is not logged in", 
    //     },{status:404});
    // }
    const body = await req.json();

    // model Car{
    //     id String @id @default(uuid())
    //     title String
    //     description String
    //     tags String[]
    //     images      Image[]  @relation("CarImages")
    //     userId String
    //     user User @relation("UserCars", fields: [userId], references: [id])
    //   }
      
    const title = body.title; 
    const description = body.description;
    const tags = body.tags;
    // const images = body.images;
    // const userId = session.user?.id;
    const userId = body.userId;

    const car = await prisma?.car.create({
        data:{
            title,
            description,
            tags,
           
            userId
        }
    })
    
    return NextResponse.json({
        message:"Car created successfully",
        car
    },{status:200});
    }catch(errror){
        return NextResponse.json({
            error,
            message:"Error creating car",
        },{status:500});
    }
}