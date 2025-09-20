const express = require("express");
const router = express.Router();
const Freelancer = require("../models/freelancer");

// Register
router.post("/Freregistration", async (req, res) => {
  try {
    const { name, email, age, gender, password } = req.body;
    const newFreelancer = new Freelancer({ name, email, age, gender, password });
    await newFreelancer.save();
    res.status(201).json({ message: "Freelancer registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
});

// Login
router.post("/Frelogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const freelancer = await Freelancer.findOne({ email, password });

    if (!freelancer) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.status(200).json({ message: "Freelancer login successful" });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
