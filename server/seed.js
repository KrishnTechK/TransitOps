require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./models/User");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    // Remove existing users
    await User.deleteMany({});

    const users = [
      {
        name: "Fleet Manager",
        email: "fleet@transit.com",
        password: await bcrypt.hash("123456", 10),
        role: "Fleet Manager",
      },
      {
        name: "Driver",
        email: "driver@transit.com",
        password: await bcrypt.hash("123456", 10),
        role: "Driver",
      },
      {
        name: "Safety Officer",
        email: "safety@transit.com",
        password: await bcrypt.hash("123456", 10),
        role: "Safety Officer",
      },
      {
        name: "Financial Analyst",
        email: "finance@transit.com",
        password: await bcrypt.hash("123456", 10),
        role: "Financial Analyst",
      },
    ];

    await User.insertMany(users);

    console.log("Demo users inserted successfully");

    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });