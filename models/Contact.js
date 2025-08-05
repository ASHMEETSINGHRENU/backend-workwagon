const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  title: { type: String, required: true },
  budget: { type: String, required: true },
  details: { type: String, required: true },
  attachment: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Contact", ContactSchema);
