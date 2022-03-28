const { Schema } = require('mongoose')
const Shelter = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    cats: [{ type: Schema.Types.ObjectId, ref: 'Cat', required: true }],
    catCount: { type: Number, required: true }
  },
  { timestamps: true }
)
module.exports = Shelter
