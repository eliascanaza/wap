const express = require('express');

const bookController = require('../controllers/bookController');

const router = express.Router();

//define all the methods
router.get('/', bookController.getBooks);

router.post('/add', bookController.save);

router.post('/update', bookController.update);

router.get('/:bookId', bookController.getProductById);

router.delete('/:bookId', bookController.delete);

module.exports = router;
