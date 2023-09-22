const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
name: 
    {type: String,
    required:true},

description: 
    {type: String,
    required:true},  

datetime: 
    {type: Date,
    required:true}


});

module.exports = Transaction = mongoose.model('transaction', TransactionSchema);