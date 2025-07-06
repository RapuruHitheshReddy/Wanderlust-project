const express = require("express");
const router = express.Router();
const passport = require("passport");
const catchAsync = require("../utils/catchAsync");
const { saveRedirectUrl } = require("../middleware/middleware");
const userController = require("../controllers/user");

// SIGNUP (GET + POST)
router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(catchAsync(userController.signup));

// LOGIN (GET + POST)
router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );

// LOGOUT
router.get("/logout", userController.logout);

module.exports = router;
