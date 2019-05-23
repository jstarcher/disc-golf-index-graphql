'use strict';

const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  country: String,
});

module.exports = mongoose.model('Brand', BrandSchema, 'brands');
