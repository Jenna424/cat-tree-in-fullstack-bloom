const mongoose = require('mongoose')
const ShelterSchema = require('./Shelter')
const CatSchema = require('./Cat')

const Shelter = mongoose.model('Shelter', ShelterSchema)
const Cat = mongoose.model('Cat', CatSchema)

module.exports = {
  Shelter,
  Cat
}
