const mongoose = require("mongoose");

const logoGigSchema = new mongoose.Schema({
  title: String,
  name: String,
  rating: Number,
  reviews: Number,
  image: String,
  level: String,
  price: String,
  about: String,
});

module.exports = mongoose.model("LogoGig", logoGigSchema);
