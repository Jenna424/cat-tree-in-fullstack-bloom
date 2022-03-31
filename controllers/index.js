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

const getCatsInShelter = async (req, res) => {
  try {
    const shelter = await Shelter.findById(req.params.id)
    const shelterCats = []
    for await (const catId of shelter.cats) {
      shelterCats.push(await Cat.findById(catId))
    }
    return res.status(200).json(shelterCats)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateCat = async (req, res) => {
  try {
    const cat = await Cat.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(cat)
  } catch (err) {
    res.send(err.message)
  }
}

const deleteCat = async (req, res) => {
  try {
    const { id } = req.params
    const deletedCat = await Cat.findByIdAndDelete(id)
    if (deletedCat) {
      const shelterId = deletedCat.shelter
      const shelter = await Shelter.findById(shelterId)
      // Update the shelter's cats to remove the deleted cat, and decrement the catCount
      const remainingCats = shelter.cats.filter((catId) => {
        return catId.toString() !== deletedCat._id.toString()
      })
      shelter.cats = remainingCats
      shelter.catCount = shelter.catCount - 1
      await shelter.save()
      return res.status(200).send('A cat was removed from the shelter!')
    } else {
      throw new Error('Cat not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllShelters,
  createCat,
  getCatsInShelter,
  updateCat,
  deleteCat
}
