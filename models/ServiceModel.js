
import mongoose, { Schema } from "mongoose";
 
const topicSchema = new Schema(
    {
        name: { type: String, required: true },
        images: { type: [String], required: true },
        description: { type: String, required: true },

    },
    {
        timestamps: true,
    }
);
 
const ServiceModel = mongoose.models.Service || mongoose.model("Service", topicSchema);
 
export default ServiceModel;