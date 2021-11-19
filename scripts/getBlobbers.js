require('dotenv').config()

const sdkInit = require('./sdkInit')
const nodeFetch = require('node-fetch')

global.fetch = nodeFetch

async function getFileMeta() {
  try {
    const jsClientSdk = await sdkInit('beta')

    // const path = '/Misco.txt'

    // The js-client-sdk might take long to respond, as it queries all 6 blobbers before returning.
    // To get see each blobber response quicker, please console.log the return from each request on:
    // @zerochain/0chain/index.js
    const blobbers = await jsClientSdk.getAllBlobbersDetails()
    console.log('Blobbers details', blobbers)

  } catch (e) {
    console.error('Blobbers details error:', e)
  }
}

getFileMeta()
