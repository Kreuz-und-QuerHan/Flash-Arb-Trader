require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  solidity: "0.6.12",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/` + process.env.INFURA_PROJECT_ID,
      accounts: [`0x`+process.env.ROPSTEN_PRIVATE_KEY],
      gas: 9500000,
      gasPrice: 8000000000,
      gasMultiplier: 1
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
