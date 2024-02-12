const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
    [account] = await ethers.getSigners();
    deployerAddress = account.address;
    console.log(`Deploying contracts using ${deployerAddress}`);
    const gameitem = await ethers.getContractFactory('JPEG');
    const gameitemInstance = await gameitem.deploy( 121212, {
        gasPrice: hre.ethers.utils.parseUnits("500000000000", "gwei"), // Set your desired gas price here
      }
    );
    await gameitemInstance.deployed();
    await run(`verify:verify`, {
        address: gameitemInstance.address,
    });

}

deploy()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
