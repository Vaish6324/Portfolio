const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Contact = require("./user"); 
require("dotenv").config();

const app = express();

// Middleware
const corsOptions = {
  origin: ["https://portfoliofrontend-ruddy.vercel.app"], 
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  credentials: true,
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Could not connect to MongoDB", err.message);
  });

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is working fine!");
});

// API route to handle form submissions
app.post("/api/contact", async (req, res) => {
  console.log("Request received:", req.body); // Log the request body
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully!" });
  } catch (err) {
    console.error("Error saving contact:", err.message);
    res.status(500).json({ error: "Failed to save contact", details: err.message });
  }
});

module.exports = app; // Export the app for Vercel serverless functions
