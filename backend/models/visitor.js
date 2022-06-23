const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const visitorSchema = new Schema({
    visitorname: { type: String, required: true },
    phonenumber: { type: String, required: true },
    
  }, {
    timestamps: true,
  });

const Visitor = mongoose.model('Visitor', visitorSchema);

module.exports = Visitor;