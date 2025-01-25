const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const Contact = require("./user");
require("dotenv").config();

const app = express();

// Middleware
const corsOptions = {
  origin: "https://portfoliofrontend-ruddy.vercel.app", // Allow only your frontend
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Specify allowed methods
  credentials: true, // Include credentials if needed
  allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
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

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is working fine!");
});

// API route to handle form submissions
app.post("/api/contact", async (req, res) => {
  console.log("Request received:", req.body);
  const { name, email, message } = req.body;

  try {
    // Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "New Contact Form Submission",
      text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Contact saved and email sent successfully!" });
  } catch (err) {
    console.error("Error handling contact:", err.message);
    res.status(500).json({ error: "Failed to handle contact", details: err.message });
  }
});

module.exports = app; // Export the app for Vercel serverless functions
