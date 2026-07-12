const Driver = require("../models/Driver");

// GET All Drivers
// GET /drivers

const getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find().populate("assignedVehicle");

    res.status(200).json({
      success: true,
      count: drivers.length,
      data: drivers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET Single Driver
// GET /drivers/:id

const getDriverById = async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id).populate(
      "assignedVehicle",
    );

    if (!driver) {
      return res.status(404).json({
        success: false,
        message: "Driver not found",
      });
    }

    res.status(200).json({
      success: true,
      data: driver,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// CREATE Driver
// POST /drivers

const createDriver = async (req, res) => {
  try {
    const driver = await Driver.create(req.body);

    res.status(201).json({
      success: true,
      message: "Driver created successfully",
      data: driver,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDrivers,
  getDriverById,
  createDriver,
};
