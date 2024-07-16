//app\api\Services\route.js
import connect from "@/utils/db";
import Service from "@/models/ServiceModel";
import { NextResponse } from "next/server";

 

export async function GET() {
    try {
        await connect();
        const products = await Service.find();
        return NextResponse.json({ products });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error retrieving products", error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await connect();
        const { name, images, description } = await req.json();

        if (!name || !description || !images || images.length === 0) {
            return NextResponse.json({ message: "Name and images are required" }, { status: 400 });
        }

        const newProduct = new Service({
            name,
            images,
            description, 
        });

        await newProduct.save();

        return NextResponse.json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error creating product", error: error.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const id = req.nextUrl.searchParams.get("id");
        if (!id) {
            return NextResponse.json({ message: "Product ID is required" }, { status: 400 });
        }

        await connect();
        await Service.findByIdAndDelete(id);

        return NextResponse.json({ message: "Product deleted" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error deleting product", error: error.message }, { status: 500 });
    }
}