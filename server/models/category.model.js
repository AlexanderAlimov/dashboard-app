import mongoose from "mongoose";

const Schema = mongoose.Schema;

let CategorySchema = new Schema({
  name: { type: String, required: true, max: 100 }
});

// Export the model
export default mongoose.model("Category", CategorySchema);
