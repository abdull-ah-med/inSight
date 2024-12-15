import { useState } from "react";
import { addCar } from "../services/api";

const CarManagement = () => {
  const [carData, setCarData] = useState({
    make: "",
    model: "",
    color: "",
    registrationNumber: "",
  });

  const handleChange = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addCar(carData);
    console.log(response);
    alert("Car added successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Car Management</h1>
      <input
        type="text"
        name="make"
        placeholder="Car Make"
        value={carData.make}
        onChange={handleChange}
      />
      <input
        type="text"
        name="model"
        placeholder="Car Model"
        value={carData.model}
        onChange={handleChange}
      />
      <input
        type="text"
        name="color"
        placeholder="Car Color"
        value={carData.color}
        onChange={handleChange}
      />
      <input
        type="text"
        name="registrationNumber"
        placeholder="Registration Number"
        value={carData.registrationNumber}
        onChange={handleChange}
      />
      <button type="submit">Add Car</button>
    </form>
  );
};

export default CarManagement;
