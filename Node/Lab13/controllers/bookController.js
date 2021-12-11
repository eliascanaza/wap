const Book = require('../models/book');

module.exports.getBooks = (req, res, next)=>{
    res.status(200).json(Book.fetchAll());
};

module.exports.save = (req, res, next)=> {
    const param = req.body;
    const book = new Book(param.id, param.title, param.isbn, param.publishedDate, param.author);
    res.status(200).json(book.save());
};

module.exports.getProductById = (req, res, next)=> {
    console.log("getProductById: "+req.params.bookId);
    res.status(200).json(Book.findById(req.params.bookId));
};

module.exports.update = (req, res, next)=> {
    console.log(req.body);
    const param = req.body;
    const book = new Book(param.id, param.title, param.isbn, param.publishedDate, param.author);
    res.status(200).json(book.update());
};

