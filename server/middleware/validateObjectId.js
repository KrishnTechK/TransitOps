const mongoose = require("mongoose");
const ApiError = require("../utils/ApiError");

const validateObjectId = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ApiError(400, "Invalid Object Id"));
  }

  next();
};

module.exports = validateObjectId;


// const validateObjectId = require("../middleware/validateObjectId");

// router.get("/:id", validateObjectId, getVehicleById);

// router.put("/:id", validateObjectId, updateVehicle);

// router.delete("/:id", validateObjectId, deleteVehicle);