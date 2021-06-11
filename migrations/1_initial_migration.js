const SwapFeeReward = artifacts.require("SwapFeeReward");
const Oracle = artifacts.require("Oracle");

module.exports = async function (deployer) {
  
  await deployer.deploy(Oracle, "0x376dD065bA81EB8746dc4D904f153b2AA62B812E", "0x68f3720edfb545839bf41e9091457fe36b47f5262ac6205a5fc7e05e555762f6", "0x5dE4C680d3e306eBbd94b5795905f8234B22D803");
  let instanceOracle = await Oracle.deployed();
  console.log(instanceOracle.address);

  await deployer.deploy(
    SwapFeeReward,
	  "0x376dD065bA81EB8746dc4D904f153b2AA62B812E",
      "0x61451A3b34fFFBb07D89222A1a994E616741d459",
      "0x68f3720edfb545839bf41e9091457fe36b47f5262ac6205a5fc7e05e555762f6",
      "0xC17FA8E2310f1920Ce592b267Bb16d5f00336155",
      instanceOracle.address,
      "0xC17FA8E2310f1920Ce592b267Bb16d5f00336155"
    );
  let instanceSwapFeeReward = await SwapFeeReward.deployed();
};
//
