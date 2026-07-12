const express = require("express");
const router = express.Router();

const {
  getVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require("../controllers/vehicleController");

// Get all vehicles
router.get("/", getVehicles);

// Get single vehicle
router.get("/:id", getVehicleById);

// Create vehicle
router.post("/", createVehicle);

// Update vehicle
router.put("/:id", updateVehicle);

// Delete vehicle
router.delete("/:id", deleteVehicle);

module.exports = router;