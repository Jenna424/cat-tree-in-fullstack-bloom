const { Shelter, Cat } = require('../models')

const getAllShelters = async (req, res) => {
  try {
    const shelters = await Shelter.find()
    return res.status(200).json({ shelters })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createCat = async (req, res) => {
  try {
    const shelterId = req.body.shelter
    const shelter = await Shelter.findById(shelterId)
    const cat = await new Cat(req.body)
    // Add the cat to the shelter's array of cats
    await Shelter.findByIdAndUpdate(shelterId, {
      cats: [...shelter.cats, cat._id]
    })
    // Update the catCount in the shelter
    await Shelter.findByIdAndUpdate(shelterId, {
      catCount: shelter.cats.length + 1
    })
    await cat.save()
    return res.status(201).json(cat)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllShelters,
  createCat
}
