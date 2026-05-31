const mongoose = require('mongoose');

const mainCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Main category name is mandatory'],
    unique: true
  },
}, { timestamps: true });

const MainCategory = mongoose.model('MainCategory', mainCategorySchema);

module.exports = MainCategory;