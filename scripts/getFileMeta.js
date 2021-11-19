require('dotenv').config()

const sdkInit = require('./sdkInit')
const { allocId, clientId, privateKey, publicKey } = require('../lib/constants')

async function getFileStats() {
  try {
    const jsClientSdk = await sdkInit()

    const path = '/Misco.txt'

    // The js-client-sdk might take long to respond, as it queries all 6 blobbers before returning.
    // To get see each blobber response quicker, please console.log the return from each request on:
    // @zerochain/0chain/index.js
    const fileMeta = await jsClientSdk.getFileMetaDataFromPath(
      allocId, path, clientId, privateKey, publicKey
    )
    console.log('File Meta', fileMeta)

  } catch (e) {
    console.error('File Meta error:', e)
  }
}

getFileStats()
