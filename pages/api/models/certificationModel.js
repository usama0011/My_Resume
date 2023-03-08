const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  courseTitle: {
    type: String,
    required: true
  },
  courseDescription: {
    type: String,
    required: true
  },
  courseImage: {
    type: String,
    required: true
  },
  institueName: {
    type: String,
    required: true
  },
  courseDuration: {
    type: String,
    required: true
  },
  courseSkills:{
    type:String,
    required:true
  },
  courseCertificateLink:{
    type:String,
    required:true
  }
},{timestamps:true});

const certficate = mongoose.model('Certification', certificationSchema);

module.exports = certficate;
