const Car = require("../models/Car");

exports.addCar = async (req, res) => {
  const { make, model, color, registrationNumber } = req.body;

  try {
    const car = new Car({ make, model, color, registrationNumber });
    await car.save();
    res.status(201).json({ message: "Car added successfully", car });
  } catch (error) {
    res.status(400).json({ message: "Error adding car", error });
  }
};
