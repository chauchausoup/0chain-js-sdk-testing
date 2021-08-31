const bls = require('bls-wasm')
const sha3 = require('js-sha3')

// Copied from js-client-sdk utils.js
function hexStringToByte(str) {
    if (!str) {
        return new Uint8Array();
    }
    var a = [];
    for (var i = 0, len = str.length; i < len; i += 2) {
        a.push(parseInt(str.substr(i, 2), 16));
    }

    return new Uint8Array(a);
}

// Same hash used in go-sdk
function get256Hash(string) {
  const hash = sha3.sha3_256(string)
  return hash
}

// Copied from js-client-sdk getSign
async function getSign(hexString, privateKey) {
  await bls.init(bls.BN254)

  const bytehash = hexStringToByte(hexString);
  const sec = new bls.SecretKey();
  sec.deserializeHexStr(privateKey);
  const sig = sec.sign(bytehash);
  const sign = sig.serializeToHexStr();

  return sign
}

module.exports = {
  get256Hash,
  getSign,
}
