const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    categoryname: String,
    categoryid: String
})

module.exports = mongoose.model('product',productSchema);
