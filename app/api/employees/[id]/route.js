//app\api\Employees\[id]/route.js
import connect from "@/utils/db";
import Employee from "@/models/EmployeeModel";
import { NextResponse } from "next/server";
 


export async function DELETE(request, { params }) {
    try {
        const { id } = params;
        await connect();
        const result = await Employee.findByIdAndDelete(id);
        if (!result) {
            return NextResponse.json({ message: "Employee not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, message: "Employee deleted successfully" });
    } catch (error) {
        console.error("Error in DELETE /api/Employees/[id]:", error);
        return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
    }
}
