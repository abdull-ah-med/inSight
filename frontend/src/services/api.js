const API_URL = "http://localhost:5000";

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const loginUser = async (userData) => {
  try {
    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json(); // Parse error JSON
      throw new Error(error.error || "An error occurred");
    }

    const data = await response.json(); // Parse success JSON
    return data;
  } catch (err) {
    console.error("Login failed:", err.message);
    throw err; // Rethrow to handle in the component
  }
};

// Add Car API
export const addCar = async (carData) => {
  const response = await fetch(`${API_URL}/cars`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(carData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to add car");
  }

  return response.json();
};
