const express = require("express");
const router = express.Router();
const validateListing = require("../middleware/validateListing");
const { isLoggedIn, isOwner } = require("../middleware/middleware");
const catchAsync = require("../utils/catchAsync");
const listingController = require("../controllers/listing");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage })


// INDEX + CREATE
router
  .route("/")
  .get(catchAsync(listingController.index))
  .post(isLoggedIn,upload.single("listing[image]"),validateListing, catchAsync(listingController.createListing));

// NEW
router.get("/new", isLoggedIn, listingController.renderNewForm);

// SHOW + UPDATE + DELETE
router
  .route("/:id")
  .get(catchAsync(listingController.showListing))
  .put(isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, catchAsync(listingController.updateListing))
  .delete(isLoggedIn, catchAsync(listingController.deleteListing));


// EDIT
router.get("/:id/edit", isLoggedIn, isOwner, catchAsync(listingController.renderEditForm));

module.exports = router;
