require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  solidity: "0.6.12",
  networks: {
    kovan: {
      url: `https://kovan.infura.io/v3/` + process.env.INFURA_PROJECT_ID,
      accounts: [`0x`+process.env.KOVAN_PRIVATE_KEY]
    },
    //ropsten: {
    //  provider: new HDWalletProvider(process.env.KOVAN_PRIVATE_KEY, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY),
    //  network_id: 3,
    //  gas: 5000000,
    //  gasPrice: 5000000000, // 5 Gwei
    //  skipDryRun: true
    //},
  }
};
