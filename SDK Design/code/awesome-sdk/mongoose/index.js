/** Connection of mongoose, only require this lib to connect,
 * after that use require('mongoose') */

const mongoose = require('mongoose')
const { mongoUrl, mongoUseUnifiedTopology } = require('../config')

const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: mongoUseUnifiedTopology,
  useFindAndModify: false,
  // bufferCommands: false
}

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

module.exports = mongoose.connect(mongoUrl, options)
