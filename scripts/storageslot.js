const { ethers } = require('hardhat');

// Deploy function
async function storageslot() {
    [account, account2] = await ethers.getSigners();

    const slot = ethers.utils.solidityKeccak256(
        ["uint256", "uint256"],
        [1200, 44]
    );

    const data = await ethers.provider.getStorageAt(
        "0x478238a1c8B862498c74D0647329Aef9ea6819Ed",
        slot
    );
    console.log("slot", 44, "data", data);

    await ethers.provider.send("hardhat_setStorageAt", [
        "0x478238a1c8B862498c74D0647329Aef9ea6819Ed",
        slot,
        "0x000000006474a7f300000000000000000000000000000000000000000BEBC200",
    ]);

    const data1 = await ethers.provider.getStorageAt(
        "0x478238a1c8B862498c74D0647329Aef9ea6819Ed",
        slot
    );
    console.log("slot", 44, "data", data1);


    // const a = ethers.BigNumber.from("0x0000000005f5e100").toString();
    // console.log(a);   // 1st val
    // console.log("2", ethers.BigNumber.from("0x000000006474a7f300000000000000000000000000000000").toString());  // 2nd val
}

storageslot()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
