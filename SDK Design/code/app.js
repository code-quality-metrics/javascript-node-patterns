/** Example App using SDK */

// Set up all the configuration I need in my SDK
const configProvider = require('awesome-sdk/config-provider')
configProvider.set({
  user: {
    foo: 'bar'
  }
})

// Connect Mongoose if I want to use Models
require('awesome-sdk/mongoose')

// Requring just one Model frees up memory and allows me to tree shake for lambdas using webpack
const User = require('awesome-sdk/models/user')

User.findOne({}).then((user) => console.log(user))

// Requiring an api library

const httpBin = require('awesome-sdk/api/httpBin')

httpBin.httpPost({ foo: 'bar' }).then((res) => console.log(res))

// Requiring a service

const { createUser } = require('awesome-sdk/services/user')

createUser({ name: 'Ruben' }).catch((error) => console.error(error))