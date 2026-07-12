const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};

module.exports = asyncHandler;








// const asyncHandler = require("../utils/asyncHandler");

// const getVehicles = asyncHandler(async (req, res) => {
//    ...
// });