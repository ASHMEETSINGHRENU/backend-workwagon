const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });




router.post("/", upload.single("attachment"), async (req, res) => {
  const { name, phone, title, budget, service, details } = req.body;
  const filePath = req.file ? req.file.path : null;

  const newContact = new Contact({
    name,
    phone,
    title,
    budget,
    service,
    details,
    attachment: filePath
  });

  await newContact.save();
  res.status(201).json({ message: "Contact submitted." });
});

module.exports = router;
