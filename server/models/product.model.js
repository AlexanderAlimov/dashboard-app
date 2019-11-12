import mongoose from "mongoose";
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  purchPrice: { type: Number, required: true },
  salePrice: { type: Number, required: true },
  category: { type: String }
});

// Export the model
export default mongoose.model("Product", ProductSchema);
