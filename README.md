# This repository, contains TestScripts and deployment scripts for following contracts:
- Gameitem
- Greeter
- Simplestorage
- token
- Artwork

### To start using this repository, simply clone it or download the zip file. Once downloaded, run `npm install` to install all the necessary packages.

### To get your own Testnet head [builbear](https://buildbear.io/)
- Create a Testnet on BuildBear
- Copy the RPC and explorer link from the Dashboard and add to the hardhat.config.js file
- Copy the mnemonic from the Dashboard and add in Hardhat.config.js file 

### To deploy all the contracts, run `npx hardhat run scripts/deployAll.js --network buildbear`.

### To run all the TestScripts, use the command `npx hardhat test`.

npx hardhat node --fork https://frequent-side-thunder.discover.quiknode.pro/ffde0aa54333bbbc2c89a2d55c28ddf3d48b0219/