const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      networkCheckTimeout: 1000000000,
      network_id: "*"
    },
    bsc_testnet: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://data-seed-prebsc-1-s1.binance.org:8545/"),
      network_id: 97,
      skipDryRun: true
    },
    eth: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://infura.io/v3/XXXXXXXX"),
      network_id: 1,
      gasPrice: 50000000000
    },
    bsc: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://bsc-dataseed2.defibit.io/"),
      network_id: 56,
      gasPrice: 6000000000
    },
    ftm: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://rpcapi.fantom.network/"),
      network_id: 250,
      gasPrice: 80000000000,
      gas: 6700000,
      networkCheckTimeout: 1000000000,
    },
    matic: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://polygon-mainnet.infura.io/v3/07d1b7dec8394a1188fd66959686f5c7"),
      network_id: 137,
      chain_id: 1137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gasPrice: 70000000000,
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: process.env.BSCSCAN_API_KEY,
    ftmscan: process.env.FTMSCAN_API_KEY,
    etherscan: process.env.ETHSCAN_API_KEY,
    polygonscan: process.env.POLYGONSCAN_API_KEY,
  },
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
}