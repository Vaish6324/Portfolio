const mongoose = require("mongoose");

// Define the Contact schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true }, // User's name
  email: { type: String, required: true }, // User's email
  message: { type: String, required: true }, // User's message
  submittedAt: { type: Date, default: Date.now }, // Timestamp when the form was submitted
});

// Create a model from the schema
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact; // Exporting the model
