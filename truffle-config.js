const HDWalletProvider = require("truffle-hdwallet-provider");

const fs = require('fs');
const api_key = fs.readFileSync('.api_key').toString().trim();
const mnemonic = fs.readFileSync('.mnemonic').toString().trim();
module.exports = {

  compilers: {
    solc: {
      version: "0.8.9"
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      gas: 5500000, //gas limit
      gasPrice: 10000000000 //10Gwei
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider(mnemonic, 'https://goerli.infura.io/v3/' + api_key)
      },
      network_id: '5',
      gas: 4465030,
      gasPrice: 10000000000,
    },
  }

};