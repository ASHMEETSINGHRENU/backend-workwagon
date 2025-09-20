const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

// Load environment variables at the very top
require("dotenv").config();

// Import routes
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contact.routes");
const freelancerRoutes = require("./routes/freelancerRoutes");
const logoGigRoutes = require("./routes/logoGigRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Atlas connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/freelancers", freelancerRoutes);
app.use("/api/logoGigs", logoGigRoutes);

// Default Route
app.get("/", (req, res) => res.send("Welcome to WorkWagon API 🚀"));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
