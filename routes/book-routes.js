const router = require('express').Router();

// Get Routes from Controller
const {getAll} = require("../controllers/BookControllers")

// Route to get all books
router.get("/", getAll)

module.exports = router;