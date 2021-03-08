const router = require('express').Router();

// Get Routes from Controller
const {getAll, postBook} = require("../controllers/BookControllers")

// Route to get all books
router.get("/", getAll)
router.post("/", postBook)

module.exports = router;