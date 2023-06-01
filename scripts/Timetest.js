const { ethers } = require('hardhat');

// Deploy function
async function Timetest() {
    [account] = await ethers.getSigners();
    deployerAddress = account.address;
    console.log(`Deploying contracts using ${deployerAddress}`);
    console.time();
    for (let i = 0; i < 10; i++) {
        const token = await ethers.getContractFactory('MyToken');
        const tokenInstance = await token.deploy(
        );
        await tokenInstance.deployed();
    }
    console.log("Time taken to deploy 10 smart contract on Goerli  in  milliseconds");
    console.timeEnd();
}

Timetest()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
