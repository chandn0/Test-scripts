const { ethers } = require('hardhat');
const wavaxAbi = require('../abi/vaultfactory.json');
// Deploy function
async function vault() {
    [account, account2] = await ethers.getSigners();

    //wavax created at 820 block
    const wavax = new ethers.Contract('0x8e83CA66Ec901E16BdAf137aC9eD7553E4dD95D3', wavaxAbi, account);
    const WETH = "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619";
    const WETH_amount = "5000000000000000";
    const EURO3_amount = "0"; // 10 EURO3
    const mint = await wavax.createVault(
        WETH,
        WETH_amount,
        EURO3_amount
      );
    await mint.wait();
    console.log('minted wavax');


}

vault()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
