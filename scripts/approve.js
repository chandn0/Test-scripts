const { ethers } = require('hardhat');
const wavaxAbi = require('../abi/wavax.json');
// Deploy function
async function approve() {
    [account] = await ethers.getSigners();

    //wavax created at 820 block
    const wavax = new ethers.Contract('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', wavaxAbi, account);
    const wavaxAmount = ethers.utils.parseEther('1000');
    const mint = await wavax.approve("0xdef1c0ded9bec7f1a1670819833240f027b25eff", wavaxAmount);
    await mint.wait();
    console.log('minted wavax');
    const wavaxBalance = await wavax.balanceOf(account.address);
    console.log('wavax balance', wavaxBalance.toString());



}

approve()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
