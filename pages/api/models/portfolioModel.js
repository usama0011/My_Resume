const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  portfolioTitle: {
    type: String,
    required: true
  },
  portfolioDescription: {
    type: String,
    required: true
  },
  portfolioImage: {
    type: String,
    required: true
  },
  technologyStackList: {
    type: [String],
    required: true
  }
},{timestamps:true});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
