import prisma from "@/app/db";
import { NextResponse } from "next/server";


export async function GET(req:Request){
    try{
        const cars = await prisma?.car.findMany();
        if(!cars){
            return NextResponse.json({
                message:"No cars found"
            },{status:404});
        }

        return NextResponse.json({
            cars
        },{status:200});
    }catch(error){
        return NextResponse.json({
            error
        },{status:500});
    }
}