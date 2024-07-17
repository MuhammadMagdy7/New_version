//app\api\Services\[id]\route.js
import connect from "@/utils/db";
import Product from "@/models/ProductModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const { id } = params;
        await connect();
        const products = await Product.findOne({ _id: id });
        if (!products) {
            return NextResponse.json({ error: "products not found" }, { status: 404 });
        }
        return NextResponse.json({ products }, { status: 200 });
    } catch (error) {
        console.error("Error in GET /api/products/[id]:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
