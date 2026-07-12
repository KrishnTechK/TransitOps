const express = require("express");
const router = express.Router();

const {
  getDrivers,
  getDriverById,
  createDriver,
} = require("../controllers/driverController");

// Get all drivers
router.get("/", getDrivers);

// Get driver by ID
router.get("/:id", getDriverById);

// Create new driver
router.post("/", createDriver);

module.exports = router;