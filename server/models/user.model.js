import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import bcrypt from "bcrypt";
import uniqueValidator from "mongoose-unique-validator";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

UserSchema.plugin(uniqueValidator);
// UserSchema.plugin(passportLocalMongoose);

UserSchema.methods.validPassword = function(password) {
  return this.password === password;
};

export default mongoose.model("User", UserSchema);
