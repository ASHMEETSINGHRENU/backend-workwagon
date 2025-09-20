const mongoose = require("mongoose");

const freelancerSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  gender: String,
  password: String,
});

module.exports = mongoose.model("Freelancer", freelancerSchema);
