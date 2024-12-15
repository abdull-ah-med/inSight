const express = require("express");
const router = express.Router();
const { addCar } = require("../controllers/carController");

router.post("/add", addCar);

module.exports = router;
