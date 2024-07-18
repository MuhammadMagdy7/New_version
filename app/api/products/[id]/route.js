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


export async function DELETE(request, { params }) {
    try {
        const { id } = params;
        await connect();
        const result = await Product.findByIdAndDelete(id);
        if (!result) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error in DELETE /api/Products/[id]:", error);
        return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
    }
}
