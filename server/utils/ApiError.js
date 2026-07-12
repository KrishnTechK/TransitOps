class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);

    this.statusCode = statusCode;
    this.success = false;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError;





// const ApiError = require("../utils/ApiError");

// if (!vehicle) {
//     throw new ApiError(404, "Vehicle not found");
// }