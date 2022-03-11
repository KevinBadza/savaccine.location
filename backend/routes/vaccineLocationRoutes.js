const router = require('express').Router();
const VaccineLocation = require('../models/VaccineLocation');

// create a Vaccine Locations
router.post('/', async (req, res) => {
  const newVaccineLocation = new VaccineLocation(req.body);
  try {
    const savedVaccineLocation = await newVaccineLocation.save();
    res.status(200).json(savedVaccineLocation);
  } catch (error) {
    res.status(500).json(error);
  }
});
// get all vaccine Locations
router.get('/', async (req, res) => {
  try {
    const AllVaccineLocation = await VaccineLocation.find();
    res.status(200).json(AllVaccineLocation);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
