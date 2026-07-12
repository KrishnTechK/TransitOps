const express = require("express");
const router = express.Router();

const { login, getProfile } = require("../controllers/authController");

const verifyToken = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/login", login);

router.get("/profile", verifyToken, getProfile);

router.get(
  "/admin",
  verifyToken,
  roleMiddleware("Fleet Manager"),
  (req, res) => {
    res.json({
      success: true,
      message: "Fleet Manager Access Granted",
    });
  }
);
module.exports = router;
