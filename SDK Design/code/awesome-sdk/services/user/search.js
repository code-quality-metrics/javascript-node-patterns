const User = require('../../models/user')
const httpBin = require('../../api/httpBin')

async function createUser({ name }) {
  const { body: userInfo } = await httpBin.httpPost({ foo: 'bar '})
  const user = await new User(userInfo).save()
  return user
}

module.exports = { createUser }