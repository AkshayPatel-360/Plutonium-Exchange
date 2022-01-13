
require('@nomiclabs/hardhat-waffle')

module.export = {
  solidity:'0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/u430rbZG2sQueJu8EbzFHLq4rq00XWQp',
      accounts: ['6b4094eab419c56b3f25a05fbae88b6b946f16030cf38dcc47a765eed1e49ddb']
    }
  }
}