const express = require("express");
const router = express.Router({ mergeParams: true });
const catchAsync = require("../utils/catchAsync");
const validateReview = require("../middleware/validateReview");
const { isLoggedIn, isReviewAuthor } = require("../middleware/middleware");
const reviewController = require("../controllers/review");

// CREATE on collection
router
  .route("/")
  .post(
    isLoggedIn,
    validateReview,
    catchAsync(reviewController.createReview)
  );

// EDIT + UPDATE + DELETE on individual review
router
  .route("/:reviewId")
  .put(
    isLoggedIn,
    isReviewAuthor,
    validateReview,
    catchAsync(reviewController.updateReview)
  )
  .delete(
    isLoggedIn,
    isReviewAuthor,
    catchAsync(reviewController.deleteReview)
  );

// EDIT FORM (separate GET)
router.get(
  "/:reviewId/edit",
  isLoggedIn,
  isReviewAuthor,
  catchAsync(reviewController.renderEditForm)
);

module.exports = router;
