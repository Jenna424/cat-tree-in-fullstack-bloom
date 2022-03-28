const { Schema } = require('mongoose')
const Cat = new Schema(
  {
    name: { type: String, required: true },
    breed: { type: String, required: true },
    color: { type: String, required: true },
    temperament: { type: String, required: true },
    image: { type: String, required: true },
    shelter: { type: Schema.Types.ObjectId, ref: 'Shelter', required: false }
  },
  { timestamps: true }
)
module.exports = Cat
