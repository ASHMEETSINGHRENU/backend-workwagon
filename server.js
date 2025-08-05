require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contact.routes");
const freelancerRoutes = require("./routes/freelancerRoutes");

const logoGigRoutes = require("./routes/logoGigRoutes");




const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



// Middleware
app.use(cors());
app.use(express.json());



app.use(express.urlencoded({ extended: true }));


// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/WorkWagon", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB error:", err));

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/freelancers", freelancerRoutes);
app.use("/api/logoGigs", logoGigRoutes);

app.get("/", (req, res) => res.send("Welcome to WorkWagon API 🚀"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
