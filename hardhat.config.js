/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// require("@tenderly/hardhat-tenderly");
require("hardhat-contract-sizer");
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require("@nomiclabs/hardhat-vyper");
// Change private keys accordingly - ONLY FOR DEMOSTRATION PURPOSES - PLEASE STORE PRIVATE KEYS IN A SAFE PLACE
// Export your private key as
//       export PRIVKEY=0x.....


module.exports = {
  defaultNetwork: "buildbear",
  // vyper: {
  //   compilers: [{ version: "0.2.11" }, { version: "0.3.7" }],
  // },
  tenderly: {
    username: "0xchandan",
    project: "project"
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
      url: "https://minio.delta.buildbear.io/submit/chandan-nodeId-1",
      // accounts: [`89e99b46c6fc6f6c51877defc4bc5f4d0892d56fd855eec91c07659c1817bf50`],  
    },
    tenderly: {
      url: "https://rpc.tenderly.co/fork/4c79ca40-e3e5-49b6-8037-cda933f661fd",
    },
    phalcon: {
      url: "https://rpc.phalcon.xyz/ecfa1730790d473aa0f84abbca9cbd9e",
    },
    conduit: {
      url: "https://rpc-regulatory-coffee-woodpecker-z121e7ud5v.t.conduit.xyz",
    },
    nameless: {
      url: "https://7a0e92c1-5a94-4565-abed-02baa5c6573d.ethereum.nameless.io",
    }

  },
  solidity: {
    compilers: [
      {
        version: '0.8.16',
      },
      {
        version: '0.8.17',
      },
      {
        version: '0.8.0',
      },
      {
        version: '0.8.4',

      },
      {
        version: '0.8.9',
       
      },
      {
        version: '0.5.0',
        
      },
      {
        version: '0.8.13',
       
      },
      {
        version: '0.5.5',
       
      },
    ],
  },

  etherscan: {
    apiKey: {
      buildbear: "verifyContract",
      phalcon: "59c47ae3-eb72-49d7-974e-fe04c9a901f3",
    },
    customChains: [
      {
        network: "buildbear",
        chainId: 11155111,
        urls: {
          apiURL: "https://rpc.dev.buildbear.io/verify/etherscan/redundant-luminara-unduli-26bd3331",
          browserURL: "https://explorer.dev.buildbear.io/redundant-luminara-unduli-26bd3331",
        },
      },
      {
        network: "phalcon",
        chainId: 1,
        urls: {
          apiURL: "https://alp.phalcon.xyz/59c47ae3-eb72-49d7-974e-fe04c9a901f3/ecfa1730790d473aa0f84abbca9cbd9e",
          browserURL: "https://etherscan.io/"
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
