

import mongoose, { Schema } from "mongoose";
 
const topicSchema = new Schema(
    {
        name: { type: String, required: true },
        images: { type: [String], required: true },
    },
    {
        timestamps: true,
    }
);
 
const EmployeeModel = mongoose.models.Employee || mongoose.model("Employee", topicSchema);
 
export default EmployeeModel;