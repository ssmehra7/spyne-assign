import prisma from "@/app/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { carId: string } }) {
    try {
        const car = await prisma?.car.findUnique({
            where: {
                id: params.carId
            }
        });

        if (!car) {
            return NextResponse.json({
                message: "Car not found"
            }, { status: 404 });
        }

        return NextResponse.json({
            car
        }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({
            message: error.message || "An error occurred"
        }, { status: 500 });
    }
}
