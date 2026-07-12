const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    vehicleNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    type: {
      type: String,
      required: true,
      enum: ["Truck", "Van", "Mini Truck", "Pickup"],
    },

    status: {
      type: String,
      enum: ["Available", "In Trip", "Maintenance"],
      default: "Available",
    },

    capacity: {
      type: Number,
      required: true,
    },

    fuelType: {
      type: String,
      enum: ["Diesel", "Petrol", "CNG", "Electric"],
      required: true,
    },

    registrationDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);