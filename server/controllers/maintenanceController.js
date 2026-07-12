const Maintenance = require("../models/Maintenance");

// =============================
// GET All Maintenance Records
// GET /maintenance
// =============================
const getMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.find().populate("vehicle");

    res.status(200).json({
      success: true,
      count: maintenance.length,
      data: maintenance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =============================
// GET Single Maintenance Record
// GET /maintenance/:id
// =============================
const getMaintenanceById = async (req, res) => {
  try {
    const maintenance = await Maintenance.findById(req.params.id).populate("vehicle");

    if (!maintenance) {
      return res.status(404).json({
        success: false,
        message: "Maintenance record not found",
      });
    }

    res.status(200).json({
      success: true,
      data: maintenance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =============================
// CREATE Maintenance Record
// POST /maintenance
// =============================
const createMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.create(req.body);

    res.status(201).json({
      success: true,
      message: "Maintenance record created successfully",
      data: maintenance,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getMaintenance,
  getMaintenanceById,
  createMaintenance,
};