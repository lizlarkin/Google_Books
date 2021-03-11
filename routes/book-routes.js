const router = require('express').Router();

// Get Routes from Controller
const {
    getAll, 
    postBook,
    deleteOneBook} = require("../controllers/BookControllers")

// Route to get all books
router.get("/", getAll);
router.route("/save").post(postBook);
router.delete("/:id", deleteOneBook);

module.exports = router;