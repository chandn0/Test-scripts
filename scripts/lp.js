const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
    [account] = await ethers.getSigners();
    deployerAddress = account.address;
    console.log(`Deploying contracts using ${deployerAddress}`);
    const JPEG = await ethers.getContractFactory("JPEG");
    const jpeg = await JPEG.deploy(1000000000); // 1B JPEG'd
    await jpeg.deployed();

    console.log("JPEG deployed to:", jpeg.address);
    const LPFarming = await ethers.getContractFactory("LPFarming");
    const farming = await LPFarming.deploy(jpeg.address); // 100 JPEG per block
    await farming.deployed();
    console.log("LPFarming deployed to:", farming.address);
    
    await run(`verify:verify`, {
        address: farming.address,
        constructorArguments: [jpeg.address],
    });

}

deploy()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
