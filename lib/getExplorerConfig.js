const fetch = require('node-fetch')
const settings = require('./explorer-settings.json')

async function getExplorerConfig(baseUrl) {
  return await fetch(`${baseUrl}/dns/network`)
    .then(resp => resp.json())
    .then(({ miners, sharders }) => {
      const explorer = {
        ...settings,
        miners: miners.map(url => url + '/'),
        sharders: sharders.map(url => url + '/'),
      };

      return { explorer }
    })
    .catch(error => ({ error }))
}

module.exports = getExplorerConfig
