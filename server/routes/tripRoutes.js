const express = require("express");
const router = express.Router();

const {
  getTrips,
  getTripById,
  createTrip,
} = require("../controllers/tripController");

// Get all trips
router.get("/", getTrips);

// Get trip by ID
router.get("/:id", getTripById);

// Create new trip
router.post("/", createTrip);

module.exports = router;