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
    const cat = await new Cat(req.body)
    await cat.save()
    // Add the cat to the shelter's array of cats
    // and update the catCount in the shelter
    const shelterId = req.body.shelter
    const shelter = await Shelter.findById(shelterId)
    await Shelter.findByIdAndUpdate(shelterId, {
      cats: [...shelter.cats, cat._id],
      catCount: shelter.catCount + 1
    })
    return res.status(201).json(cat)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
// Fetches all cats in a particular shelter
const getCatsInShelter = async (req, res) => {
  try {
    const shelter = await Shelter.findById(req.params.id)
    const shelterCats = []
    for await (const catId of shelter.cats) {
      shelterCats.push(await Cat.findById(catId))
    }
    return res.status(201).json({ shelterCats })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllShelters,
  createCat
}
