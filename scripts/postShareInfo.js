require('dotenv').config()

const sdkInit = require('./sdkInit')
const { clientId, privateKey, publicKey } = require('../lib/constants')

async function postShareInfo() {
  try {
    const jsClientSdk = await sdkInit()

    // Dev network Wallet mnemonic:
    // cruel rude scare leopard fan quit tiger super maximum deny security hotel twelve dinner dry fancy hair october pupil tooth romance waste trophy chunk
    const receiverId = 'a3dd339ddb972593066f9ee8cf2541dbe37865782817aefbbca40202d7742cb2'

    const authTicket = 'eyJjbGllbnRfaWQiOiJiM2IyMjkzZDUyN2NhOTBmZTM0ZTBmOTVkMDFiM2Q3Y2VjMDJkYTFlZGU4MmQ2MTgxZDA1YWFmNmNkODQ5YWYwIiwib3duZXJfaWQiOiJhM2RkMzM5ZGRiOTcyNTkzMDY2ZjllZThjZjI1NDFkYmUzNzg2NTc4MjgxN2FlZmJiY2E0MDIwMmQ3NzQyY2IyIiwiYWxsb2NhdGlvbl9pZCI6IjE1OThmNzBkZDlkYjFkMTk2OTQzNjc3MjQ1YzkwMDc1NDJlYmM1MGRmNDMzZmM0NzQ1MTRhY2NmYWY2YTA1NGQiLCJmaWxlX3BhdGhfaGFzaCI6ImM1MTU1NTE2YWQyMzA5MGJkMTdkOThhYmMzN2MyZjIwN2Q0ZGQxN2M2YTJjZTI4OTZhOGZiYjgzZmM2NTAyZDAiLCJhY3R1YWxfZmlsZV9oYXNoIjoiZmZjMmYzM2JkYjYxMjQ1YjE2YmRiYzdhZjcxMDFlYzk3ZGViNTlhMGZmODJhMGI5NTgzNzE0ZDA3MjUyMGEwMSIsImZpbGVfbmFtZSI6Ik1vdmllcy50eHQiLCJyZWZlcmVuY2VfdHlwZSI6ImYiLCJleHBpcmF0aW9uIjoxNjM3MzM3MDg3LCJ0aW1lc3RhbXAiOjE2MzcyNTA2ODcsImVuY3J5cHRlZCI6dHJ1ZSwic2lnbmF0dXJlIjoiZWVlOGY2NDE0Yzg3Zjk5MTY4ZDQ5ZGMxYWVkMzZhYWM2NGQ4ZDhlZDA4NDk0NTEyY2YwZmU0ZDVkZDI1NjcxZSJ9'

    // The js-client-sdk might take long to respond, as it queries all 6 blobbers before returning.
    // To get see each blobber response quicker, please console.log the return from each request on:
    // @zerochain/0chain/index.js
    const shareInfo = await jsClientSdk.postShareInfo(
      authTicket,
      { clientId, client_key: publicKey, secretKey: privateKey },
      'test', // message
      'test', // fromInfo
      receiverId, // receiver clientId
    )
    console.log('Share Info', shareInfo)

  } catch (e) {
    console.error('Share Info error:', e.response)
  }
}

postShareInfo()
