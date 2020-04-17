const mongoose = require('mongoose')
const Schema = mongoose.Schema
const confProv = require('../../config-provider')

const schema = new Schema(
  {
    name: { type: String, required: true },
    statusHistory: [
      {
        status: { type: String, required: true },
        date: { type: Date, default: Date.now, required: true },
        foo: { type: String, required: true }
      },
    ],
  },
  { timestamps: true },
)

schema.pre('save', async function(next) {
  if (this.isModified('status') || this.isNew) {
    this.statusHistory.push({
      status: this.status,
      date: Date.now(),
      foo: confProv.get('user.foo'),
    })
  }
  next()
})