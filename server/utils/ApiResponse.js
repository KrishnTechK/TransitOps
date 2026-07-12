class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.success = statusCode < 400;
    this.message = message;
    this.data = data;
  }
}

module.exports = ApiResponse;





// const ApiResponse = require("../utils/ApiResponse");

// res.status(200).json(
//     new ApiResponse(
//         200,
//         vehicles,
//         "Vehicles fetched successfully"
//     )
// );