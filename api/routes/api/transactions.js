// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Book model
const Transaction= require('../../models/Transaction');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('transaction route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Transaction.find()
    .then(transactions => res.json(transactions))
    .catch(err => res.status(404).json({ notransactionsfound: 'No transactions found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Transaction.findById(req.params.id)
    .then(transaction => res.json(transaction))
    .catch(err => res.status(404).json({ notransactionfound: 'No transaction found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  Transaction.create(req.body)
    .then(transaction => res.json({ msg: 'Transaction added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this transaction' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Transaction.findByIdAndUpdate(req.params.id, req.body)
    .then(transaction => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Transaction.findByIdAndRemove(req.params.id, req.body)
    .then(transaction => res.json({ mgs: 'Job entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such entry' }));
});

module.exports = router();