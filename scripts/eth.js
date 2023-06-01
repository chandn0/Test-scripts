const { ethers } = require('hardhat');

// Deploy function
async function eth() {
    [account, account2] = await ethers.getSigners();

    const slot = ethers.utils.solidityKeccak256( //getting the storage slot
        ["uint256", "uint256"],
        [1826, 44]         //Latest RoundId(found by calling latestRound function) , SlotNo(is calculated by checking the variables of the contract, each variable (or a combination of variables under 256 bit) consumes a single slot. Slots from variables of inherited contracts are before the slots of the contract itself.)
    );

    const data = await ethers.provider.getStorageAt( //getting the data at the storage slot
        "0xE62B71cf983019BFf55bC83B48601ce8419650CC",
        slot
    );
    console.log("slot", 44, "data", data);
    //slot 44 data 0x00000000647049d70000000000000000000000000000000000000029fe69b680 The price is 1803.6
    //Now there are 64 char here excluding 0x , First 50 char is the value of the timestamp and the rest is the value of the price 

    //changing the data to 0x00000000647049d700000000000000000000000000000000000000175E0A9680 the price is 1003.6
    await ethers.provider.send("hardhat_setStorageAt", [ //setting the data at the storage slot
        "0xE62B71cf983019BFf55bC83B48601ce8419650CC",
        slot,
        "0x00000000647049d700000000000000000000000000000000000000175E0A9680",
    ]);

    const data1 = await ethers.provider.getStorageAt(
        "0xE62B71cf983019BFf55bC83B48601ce8419650CC",
        slot
    );
    console.log("slot", 44, "data", data1);

  //slot 44 data 0x00000000647049d70000000000000000000000000000000000000029fe69b680 --1803.6
    // const a = ethers.BigNumber.from("0x0000000005f5e100").toString();
    // console.log(a);   // 1st val
    // console.log("2", ethers.BigNumber.from("0x000000006474a7f300000000000000000000000000000000").toString());  // 2nd val
}

eth()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
