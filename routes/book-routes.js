const router = require('express').Router();

// Get Routes from Controller
const {test} = require("../controllers/BookControllers")

// // Test Route
// router.get("/", (req, res) => {
//     res.send('this actually works!')
// })

router.get("/", test)

module.exports = router;