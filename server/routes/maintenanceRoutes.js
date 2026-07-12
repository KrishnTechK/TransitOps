const express = require("express");
const router = express.Router();

const {
  getMaintenance,
  getMaintenanceById,
  createMaintenance,
} = require("../controllers/maintenanceController");

// Get all maintenance records
router.get("/", getMaintenance);

// Get maintenance record by ID
router.get("/:id", getMaintenanceById);

// Create new maintenance record
router.post("/", createMaintenance);

module.exports = router;