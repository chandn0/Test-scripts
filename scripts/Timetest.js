const { ethers } = require('hardhat');
const hre = require("hardhat");

// Deploy function
async function Timetest() {
    [account] = await ethers.getSigners();
    deployerAddress = account.address;
    console.log(`Deploying contracts using ${deployerAddress}`);
    console.time();

    const token = await ethers.getContractFactory('MyToken');
    const tokenInstance = await token.deploy(
    );
    await tokenInstance.deployed();
    console.log(`Contract deployed at ${tokenInstance.address}`);
    // await run(`verify:verify`, {
    //     address: tokenInstance.address,
    // });

    // await hre.tenderly.persistArtifacts({
    //     name: "MyToken",
    //     address: tokenInstance.address
    // });

    // await hre.tenderly.verify({
    //     name: "MyToken",
    //     address: tokenInstance.address,
    // })

    console.timeEnd();
}

Timetest()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
