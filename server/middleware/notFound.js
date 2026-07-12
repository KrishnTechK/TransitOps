const notFound = (req, res, next) => {
  const error = new Error(`Route Not Found - ${req.originalUrl}`);
  error.statusCode = 404;

  next(error);
};

module.exports = notFound;


// Agar user galat route hit kare

// GET /abcd

// to response aayega

// {
//     "success": false,
//     "message": "Route Not Found - /abcd"
// }