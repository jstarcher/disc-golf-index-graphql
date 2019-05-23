'use strict';

const Brand = require('../models/Brand');
const Disc = require('../models/Disc');

async function brand(parent, args, context) {
  return Brand.findById(args.id).exec();
}

async function brands(parent, args, context) {
  return Brand.find().exec();
}

async function disc(parent, args, context) {
  const d = await Disc.findById(args.id).exec();
  const b = await Brand.findById(d.brandId).exec();
  d.brand = b;

  return d;
}

async function discs(parent, args, context) {
  const d = await Disc.find().exec();

  return d.map(async (disc) => {
    const b = await Brand.findById(disc.brandId).exec();
    disc.brand = b;

    return disc;
  });
}

module.exports = {
  brand,
  brands,
  disc,
  discs
}
