const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  make: String,
  model: String,
  color: String,
  registrationNumber: { type: String, unique: true },
});

module.exports = mongoose.model("Car", CarSchema);
