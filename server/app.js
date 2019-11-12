import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import mongoose from "mongoose";

// Set up the express app
const app = express();

// Set up mongoose connection
let dev_db_url =
  "mongodb+srv://alimov:QwertyAsd123@cluster0-kvnxb.mongodb.net/test";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
