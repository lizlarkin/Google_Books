const express = require("express");

const app = express();

const PORT = process.env.PORT || 5001;

const path = require("path");

//Bring in mongoose connection from models
require("./models/Connection");

// URL Encoding / middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets/Set up Heroku deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// CUSTOM ROUTES GO HERE

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Google Books Link: http://localhost:${PORT}`);
});
