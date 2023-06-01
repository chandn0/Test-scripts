/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require("@nomiclabs/hardhat-vyper");
// Change private keys accordingly - ONLY FOR DEMOSTRATION PURPOSES - PLEASE STORE PRIVATE KEYS IN A SAFE PLACE
// Export your private key as
//       export PRIVKEY=0x.....


module.exports = {
  defaultNetwork: "buildbear",
  vyper: {
    compilers: [{ version: "0.2.11" }, { version: "0.3.7" }],
  },
  networks: {
    localhost: {
      url: "http://0.0.0.0:8545/",
    },
    hardhat: {

    },
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [`89e99b46c6fc6f6c51877defc4bc5f4d0892d56fd855eec91c07659c1817bf50`],
    },
    buildbear: {
      url: "https://rpc.dev.buildbear.io/desperate-wicket-systri-warrick-451d83a0",
      // accounts: [`89e99b46c6fc6f6c51877defc4bc5f4d0892d56fd855eec91c07659c1817bf50`],
    },

  },
  solidity: {
    compilers: [
      {
        version: '0.8.16',
        settings: {
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
      {
        version: '0.8.0',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
      {
        version: '0.5.0',
        settings: {
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
      {
        version: '0.8.13',
        settings: {
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
      {
        version: '0.5.5',
        settings: {
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
    ],
  },

  etherscan: {
    apiKey: {
      buildbear: "verifyContract",
    },
    customChains: [
      {
        network: "buildbear",
        chainId: 11155111,
        urls: {
          apiURL: "https://rpc.dev.buildbear.io/verify/etherscan/desperate-wicket-systri-warrick-451d83a0",
          browserURL: "https://explorer.dev.buildbear.io/desperate-wicket-systri-warrick-451d83a0",
        },
      },
    ],
  },
  // etherscan: {
  //   apiKey: {
  //     polygonMumbai: "AJ6YVP3XI51QJA9N5HSG32VHF4ASWQZIQM",
  //   },

  // },

  paths: {
    sources: './contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 20000000000,
  },
};
