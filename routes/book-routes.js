const router = require('express').Router();

// Test Route
router.get("/", (req, res) => {
    res.send('this actually works!')
})

module.exports = router;