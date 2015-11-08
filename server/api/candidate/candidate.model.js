'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CandidateSchema = new Schema({
  name: String,
  info: String,
  count: Number,
  active: Boolean
});

module.exports = mongoose.model('Candidate', CandidateSchema);
