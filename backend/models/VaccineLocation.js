const mongoose = require('mongoose');

const VaccineLocationSchema = new mongoose.Schema(
  {
    locationName: {
      type: String,
      require: true,
      min: 6,
    },
    description: {
      type: String,
      require: true,
      min: 6,
    },
    address: {
      type: String,
      require: true,
      min: 6,
    },
    lat: {
      type: Number,
      require: true,
    },
    long: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('VaccineLocation', VaccineLocationSchema);
