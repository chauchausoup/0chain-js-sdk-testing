require('dotenv').config()
const sdkInit = require('./scripts/sdkInit')

async function testSdk() {
  try {
    await sdkInit()
  } catch (e) {
    console.error(e)
  }
}

testSdk()
