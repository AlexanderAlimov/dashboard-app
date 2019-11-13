import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

//read env file
dotenv.config();

//setup app
const app = express();

//setup mongodb connect
let mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//use router
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
