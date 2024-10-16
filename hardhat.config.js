require("@nomiclabs/hardhat-waffle");
require('hardhat-abi-exporter');
require('dotenv').config({path: __dirname+'/.env'})
require("@nomiclabs/hardhat-etherscan");
require('hardhat-contract-sizer');
require('hardhat-gas-reporter');
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.Alchamy;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: {
    compilers: [{
      version: "0.4.18",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1000,
        },
      },
    },
    {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  {
    version: "0.7.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },  {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  ]
  },

  networks: {
    hardhat: {
      chainId: 31337,
      gasPrice: "auto",
      gasLimit: 3000000,
      forking: {
         url:'https://eth-mainnet.g.alchemy.com/v2/',
        }
    }, 
    // goerli: {
    //   url:`https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API}`,
    //   accounts: [`0x${process.env.PRIVATE_KEY}`],
    // },
    // polygon: {
    //   url:``,
    //   accounts: [`0x${process.env.PRIVATE_KEY}`],
    // },
    // sepolia: {
    //   url: QUICKNODE_HTTP_URL,
    //   accounts: [PRIVATE_KEY],
    //   gasPrice: "auto",
    // },
  },
};
