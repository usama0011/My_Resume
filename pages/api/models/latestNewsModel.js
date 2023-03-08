const mongoose = require('mongoose');

const latestNewsSchema = new mongoose.Schema({
  newsTitle: {
    type: String,
    required: true
  },
  newsDescription: {
    type: String,
    required: true
  },
  newsImage: {
    type: String,
    required: true
  },
  newsAthor: {
    type: String,
    required: true
  },
  newsWebsiteLink: {
    type: String,
    required: true
  }
},{timestamps:true});

const LatestNews = mongoose.model('LatestNews', latestNewsSchema);

module.exports = LatestNews;
