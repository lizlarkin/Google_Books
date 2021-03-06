const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google-books", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
}, (err) => {
    if (err) throw err;
    console.log('connected successfully to mongodb!')
});

module.exports = mongoose;