// app.js

if(process.env.NODE_ENV != "production")
{
  require("dotenv").config(); 
}
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require("connect-mongo")
const flash = require("connect-flash");
const ExpressError = require("./utils/ExpressError");
const passport = require("passport")
const LocalStrategy = require("passport-local")



// Routes
const listingRoutes = require("./routes/listing");
const reviewRoutes = require("./routes/reviews");
const userRoutes = require("./routes/user") 

// Models
const Review = require("./models/review");
const User = require("./models/user")

// middleware
const validateReview = require("./middleware/validateReview");

// connect to MongoDB
 
const dbUrl = process.env.ATLASDB_URL;
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(dbUrl);
  console.log("DB is connected");
}

// view engine
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// session & flash
const store = MongoStore.create({
  mongoUrl: dbUrl,
  Crypto:{
    secret:process.env.SECRET
  },
  touchAfter: 24 * 3600
})

store.on("error",() =>{
  console.log("ERROR in MONGO SESSION STORE",err)
})

const sessionConfig = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie:{
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly:true
  }
};


app.use(session(sessionConfig));
app.use(flash());

// Passport Config
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// flash messages globally
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;

  next();
});

// mount routes
app.use("/listings", listingRoutes);
app.use("/listings/:id/reviews", reviewRoutes);
app.use("/", userRoutes);

// // Root route
// app.get("/", (req, res) => {
//   res.send("I am Root Route");
// });



// 404 error
app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

// global error handler
app.use((err, req, res, next) => {
  const { status = 500 } = err;
  if (!err.message) err.message = "Something went wrong!";
  res.status(status).render("error", { err });
});

// start server
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
