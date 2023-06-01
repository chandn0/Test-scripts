const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
    [account] = await ethers.getSigners();
    deployerAddress = account.address;
    console.log(`Deploying contracts using ${deployerAddress}`);
    const token = await ethers.getContractFactory('token');
    const tokenInstance = await token.deploy(deployerAddress
    );
    await tokenInstance.deployed();
    console.log(`Token deployed at ${tokenInstance.address}`);

    // call the mint function
    const mint = await tokenInstance.mint(deployerAddress, 1000);
    await mint.wait();
    console.log('minted token');
    const tokenBalance = await tokenInstance.balanceOf(deployerAddress);
    console.log('token balance', tokenBalance.toString());
    //write a transfer funcation
    const tr = await tokenInstance.transfer("0xaC714DA06C93b0cF4450b78Ba07EE6B589ed9A0E", 10);
    await tr.wait();
    console.log('transfered token');
    // await run(`verify:verify`, {
    //     address: tokenInstance.address,
    //     constructorArguments: [1000],
    // });

}

deploy()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
