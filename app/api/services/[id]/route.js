//app\api\Services\[id]\route.js
import connect from "@/utils/db";
import Service from "@/models/ServiceModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const { id } = params;
        await connect();
        const service = await Service.findOne({ _id: id });
        if (!service) {
            return NextResponse.json({ error: "Service not found" }, { status: 404 });
        }
        return NextResponse.json({ service }, { status: 200 });
    } catch (error) {
        console.error("Error in GET /api/services/[id]:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}


// export async function PUT(request, { params }) {
//     const { id } = params;
//     const { newName: name, newPrice: price, newdesc: category } = await request.json();
//     await connect();
//     await Service.findByIdAndUpdate(id, { name, image, price, category});
//     return NextResponse.json({ message: "Service updated" }, { status: 200 });
// }
