import prisma from "@/app/db";
import { NextResponse } from "next/server";


export async function DELETE(req:Request,{params}:{params:{carId:string}}){
    try {
        const carId = params.carId; 
        const car = await prisma.car.findUnique({
            where:{
                id:carId,
            }
        }); 
        if (!car) {
            return NextResponse.json({
                message:"This car not found",
            })
        }

        await prisma.car.delete({
            where:{
                id:carId,
            }
        })

        return NextResponse.json({
            message:"Car deleted successfully"
        })

    } catch (error) {

        return NextResponse.json({
            error,
            message:"Error in deleting"
        })
        
    }
}