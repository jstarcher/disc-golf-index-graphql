'use strict';

const mongoose = require('mongoose');

const DiscSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  stability: String,
  primaryUse: String,
  brandId: Number
});

module.exports = mongoose.model('Disc', DiscSchema, 'discs');
