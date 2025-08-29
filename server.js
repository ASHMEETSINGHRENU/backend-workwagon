const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contact.routes");
const freelancerRoutes = require("./routes/freelancerRoutes");
const logoGigRoutes = require("./routes/logoGigRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Completely public CORS
app.use(cors({
  origin: "*",
  credentials: true, // allow cookies, tokens
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect("mongodb+srv://root:root@workwagon.qtm15e1.mongodb.net/?retryWrites=true&w=majority&appName=workwagon", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/freelancers", freelancerRoutes);
app.use("/api/logoGigs", logoGigRoutes);

app.get("/", (req, res) => res.send("Welcome to WorkWagon API 🚀"));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
