async function main() {

  const deploy = false;
  const provider = waffle.provider;
  const contractAddress = "0x3651b2990f2F3562F4A8BB6CA4aE805f761926f5";

  const [deployer] = await ethers.getSigners();

  console.log("Account balance:", (await deployer.getBalance()).toString());

  if (deploy) {
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );

    const FlashArbTrader = await ethers.getContractFactory("FlashArbTrader");
    var flashArbTrader = await FlashArbTrader.deploy("0x1c8756FD2B28e9426CDBDcC7E3c4d64fa9A54728",
                                                     "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
                                                     "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D" );

    console.log("FlashArbTrader address:", flashArbTrader.address);
  } else {
    const contractAbi = [
      "function flashloan (address _flashAsset, uint _flashAmount, address _daiTokenAddress, uint _amountToTrade, uint256 _tokensOut) public",
    ];
    const unsignedFlashArbTrader = new ethers.Contract(contractAddress, contractAbi, provider);
    var flashArbTrader = await unsignedFlashArbTrader.connect(deployer);

    const tx = await flashArbTrader.flashloan("0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",  // ETH
                                              "1000000000000000000",
                                              "0xf80a32a835f79d7787e8a8ee5721d0feafd78108",  // DAI
                                              "1000000000000000000",
                                              "1");

    console.log("Transaction hash:", tx.hash);
  }

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
