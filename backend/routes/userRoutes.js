// userRoutes.js
const express = require("express");
const router = express.Router();

// Define your user-related routes here
router.get("/", (req, res) => {
  // Your route logic here
  res.send("User route is working!");
});

// Add more routes as needed

module.exports = router;
