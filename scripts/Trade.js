const { util } = require("chai");
const { utils } = require("ethers");
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();
  console.log(deployer.address);


  const XYZP = await ethers.getContractAt("SimpleFlashLoan","0xfc073209b7936A771F77F63D42019a3a93311869");

//   "Token0": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
//   "Token1": "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
//   "Token2": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
// {
//     "Token0": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
//     "Token1": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
//     "Token2": "0x6B175474E89094C44Da98b954EedeAC495271d0F"
//   },

  await XYZP.createFlashLoan("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","1000000000000000000","0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","0x6B175474E89094C44Da98b954EedeAC495271d0F")
  
  console.log("Done");





  
  
  
  
  
  
  
  
  
  
  
  
  
  }




main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
