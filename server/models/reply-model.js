const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Reply = new Schema(
  {
    mentalDisorder: {
        type: String,
        unique: true
    },

    symptoms: [String],
    
    resource: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('replies', Reply)
