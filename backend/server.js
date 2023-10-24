const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config({
  path: "/Users/kevinwijaya/Coding/Projects/movieandbookrecommender/backend/config/.env",
}); // Correct path to your .env file

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // Parse JSON request bodies

// MongoDB connection
const uri = process.env.MONGODB_URI; // Use the MONGODB_URI from the .env file

mongoose.connect(uri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define your API routes here

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
