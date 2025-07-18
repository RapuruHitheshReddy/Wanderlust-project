// controllers/user.js

const User = require("../models/user");

// render signup form
module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

// handle signup logic
module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    // console.log(registeredUser);

    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash("success", "Welcome to WanderLust!");
      res.redirect("/listings");
    });
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/signup");
  }
};

// render login form
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

// handle login
module.exports.login = (req, res) => {
  req.flash("success", "Welcome back to WanderLust!");
  const redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

// handle logout
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "You are logged out!");
    res.redirect("/listings");
  });
};
