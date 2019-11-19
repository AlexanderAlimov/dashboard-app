import express from "express";
import path from 'path';
import bodyParser from "body-parser";
import router from "./routes/index.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import passportLocal from "passport-local";
import User from "./models/user.model";

///local strategy from local passport
const LocalStrategy = passportLocal.Strategy;

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

///static path
app.use(express.static(path.join(__dirname, '../client/build')));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//use session /// express-session must be used before passport
app.use(session({ secret: "Cat name Varvara" }));
app.use(express.urlencoded({ extended: true })); // express body-parser
app.use(passport.initialize());
app.use(passport.session());

////send index.html production version
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

//use router
app.use(router);

///passport serializeUser
passport.serializeUser((user, done) => {
  done(null, user._id);
});

////passport desirializeUser
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

////passport use for login
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(null, false, { message: "Incorrect something." });
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
