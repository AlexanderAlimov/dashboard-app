import mongoose from "mongoose";
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  password: { type: String, required: true, max: 100 }
});

// Export the model
export default mongoose.model("User", UserSchema);
