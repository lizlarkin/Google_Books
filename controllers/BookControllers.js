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
    postBook: async (req, res) => {
        try {
            const newBookPost = new Book({
                title: req.body.title,
                authors: req.body.authors,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                link: req.body.link,
            });
            res.json(await newBookPost.save())
        } catch (error) {
            res.send(error)
            console.log(error)            
        }
    },
};