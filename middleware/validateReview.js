const { reviewSchema } = require("../schemas/reviewSchema");
const ExpressError = require("../utils/ExpressError");

module.exports = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(msg, 400);
  }
  next();
};
