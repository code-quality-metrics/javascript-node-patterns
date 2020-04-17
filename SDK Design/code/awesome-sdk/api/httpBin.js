const got = require('got')

const configProvider = require('../config-provider')

function httpPost(body) {
  return got.post(documentBuilderApi, {
    headers: {
      AuthorizationToken: configProvider.get('httpBin.AuthorizationToken'),
    },
    json: body,
    throwHttpErrors: false,
    responseType: 'json',
    resolveBodyOnly: false,
  })
}

module.exports = {
  httpPost,
}