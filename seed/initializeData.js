const db = require('../db')
const { Cat, Shelter } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const shelter1 = await new Shelter({
    name: "Jenna's Cat Sanctuary",
    location: 'Brooklyn, New York',
    cats: [],
    catCount: 0
  })
  await shelter1.save()

  const shelter2 = await new Shelter({
    name: "Raymond's Rescue",
    location: 'Westfield, New Jersey',
    cats: [],
    catCount: 0
  })
  await shelter2.save()

  const shelter3 = await new Shelter({
    name: "Sally's Sanctuary",
    location: 'Cranford, New Jersey',
    cats: [],
    catCount: 0
  })
  await shelter3.save()

  const shelter4 = await new Shelter({
    name: "Garfield's Grounds",
    location: 'Garwood, New Jersey',
    cats: [],
    catCount: 0
  })
  await shelter4.save()

  const shelter5 = await new Shelter({
    name: "Penelope's Place",
    location: 'Fanwood, New Jersey',
    cats: [],
    catCount: 0
  })
  await shelter5.save()

  const shelter6 = await new Shelter({
    name: "Cynthia's Safe Haven",
    location: 'Westfield, New Jersey',
    cats: [],
    catCount: 0
  })
  await shelter6.save()

  const cat1 = await new Cat({
    name: 'Seymour',
    breed: 'Maine Coon',
    color: 'white',
    temperament: 'outgoing',
    image: 'https://i.imgur.com/i0fMFfi.jpeg',
    shelter: shelter1._id
  })
  await cat1.save()

  // Updates cats that belong to the shelter
  shelter1.cats = [...shelter1.cats, cat1._id]
  shelter1.catCount = shelter1.catCount + 1
  await shelter1.save()

  const cat2 = await new Cat({
    name: 'Zelig',
    breed: 'Maine Coon',
    color: 'red smoke',
    temperament: 'sweet',
    image: 'https://i.imgur.com/9edzLuS.jpeg',
    shelter: shelter1._id
  })
  await cat2.save()

  shelter1.cats = [...shelter1.cats, cat2._id]
  shelter1.catCount = shelter1.catCount + 1
  await shelter1.save()

  const cat3 = await new Cat({
    name: 'Esther',
    breed: 'Domestic Long Hair',
    color: 'black and white',
    temperament: 'mischievous',
    image: 'https://i.imgur.com/wKZi5fm.jpeg',
    shelter: shelter2._id
  })
  await cat3.save()

  shelter2.cats = [...shelter2.cats, cat3._id]
  shelter2.catCount = shelter2.catCount + 1
  await shelter2.save()

  const cat4 = await new Cat({
    name: 'Nomi',
    breed: 'Domestic Medium Hair',
    color: 'fawn tabby',
    temperament: 'feisty',
    image: 'https://i.imgur.com/lYldoK5.jpeg',
    shelter: shelter2._id
  })
  await cat4.save()

  shelter2.cats = [...shelter2.cats, cat4._id]
  shelter2.catCount = shelter2.catCount + 1
  await shelter2.save()
  console.log('seeded catSanctuaryDatabase')
}
const run = async () => {
  await Shelter.deleteMany()
  await Cat.deleteMany()
  await main()
  db.close()
}

run()
