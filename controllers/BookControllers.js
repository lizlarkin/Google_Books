const {Book} = require("../models/Book");

module.exports = {
    test: (req, res) => {
        res.send("test controller works")
    },
};