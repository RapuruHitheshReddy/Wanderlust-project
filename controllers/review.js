// controllers/review.js

const Listing = require("../models/listing");
const Review = require("../models/review");

// CREATE Review
module.exports.createReview = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  const newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();

  req.flash("success", "Review created successfully!");
  res.redirect(`/listings/${listing.id}`);
};

// DELETE Review
module.exports.deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);

  req.flash("success", "Review deleted successfully!");
  res.redirect(`/listings/${id}`);
};

// Render Edit Form
module.exports.renderEditForm = async (req, res) => {
  const { id, reviewId } = req.params;
  const listing = await Listing.findById(id);
  const review = await Review.findById(reviewId);
  if (!review) {
    req.flash("error", "Review not found!");
    return res.redirect(`/listings/${id}`);
  }
  res.render("reviews/edit", { listing, review });
};

// Update Review
module.exports.updateReview = async (req, res) => {
  const { id, reviewId } = req.params;
  await Review.findByIdAndUpdate(reviewId, req.body.review);
  req.flash("success", "Review updated successfully!");
  res.redirect(`/listings/${id}`);
};
