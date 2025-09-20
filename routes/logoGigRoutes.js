const express = require("express");
const router = express.Router();
const LogoGig = require("../models/LogoGig");

// GET all gigs
router.get("/", async (req, res) => {
  const gigs = await LogoGig.find();
  res.json(gigs);
});

// GET gig by ID
router.get("/:id", async (req, res) => {
  const gig = await LogoGig.findById(req.params.id);
  res.json(gig);
});

// POST new gig
router.post("/", async (req, res) => {
  const newGig = new LogoGig(req.body);
  await newGig.save();
  res.status(201).json(newGig);
});

// DELETE gig
router.delete("/:id", async (req, res) => {
  await LogoGig.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
