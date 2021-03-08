const Book = require("../models/Book");

module.exports = {
    getAll: async (req, res) => {
        try {
            const allBooks = await Book.find();
            res.json(allBooks)
        } catch (error) {
            res.send(error)
            console.log(error)
        }
    },
};