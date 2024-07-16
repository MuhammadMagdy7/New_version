import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  images: { type: [String], required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },

});

export default mongoose.models.Product || mongoose.model('Product', productSchema);