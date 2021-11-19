const jsClientSdk = require('@zerochain/0chain')
const bls = require('bls-wasm')

const getExplorerConfig = require('../lib/getExplorerConfig')

async function sdkInit(network = 'dev') {
  const baseUrl = `https://${network}.0chain.net`

  const { error, explorer } = await getExplorerConfig(baseUrl)

  if (error) {
    throw new error
  }

  await jsClientSdk.init(explorer, bls)
  console.log(jsClientSdk.getSdkMetadata())

  return jsClientSdk
}

module.exports = sdkInit
