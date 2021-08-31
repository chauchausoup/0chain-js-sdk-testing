const jsClientSdk = require('@zerochain/0chain')
const bls = require('bls-wasm')

const getExplorerConfig = require('../lib/getExplorerConfig')

const baseUrl = 'https://dev.0chain.net'

async function sdkInit() {
  const { error, explorer } = await getExplorerConfig(baseUrl)

  if (error) {
    throw new error
  }

  await jsClientSdk.init(explorer, bls)
  console.log(jsClientSdk.getSdkMetadata())

  return jsClientSdk
}

module.exports = sdkInit
