//app\api\products\route.js

import { NextResponse } from 'next/server';
import Product from "@/models/ProductModel";
import connect from "@/utils/db";

export async function GET() {
    try {
        await connect();
        const products = await Product.find();
        return NextResponse.json({ products });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error retrieving products", error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await connect();
        const { name, images, description, date } = await req.json();

        if (!name || !images || images.length === 0) {
            return NextResponse.json({ message: "Name and images are required" }, { status: 400 });
        }

        const newProduct = new Product({
            name,
            images,
            description,
            date
        });

        await newProduct.save();

        return NextResponse.json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error creating product", error: error.message }, { status: 500 });
    }
}
