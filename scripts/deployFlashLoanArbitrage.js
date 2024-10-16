const { util } = require("chai");
const { utils } = require("ethers");
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();
  console.log(deployer.address);
  
  xyzpolygon = await ethers.getContractFactory("SimpleFlashLoan")
  xyzp = await xyzpolygon.deploy("0X000","0X000");
  await xyzp.deployed()
  console.log("xyzpft mainnet deployed nft contract address", xyzp.address);

  const Weth = await ethers.getContractAt("IERC20","0X000");
  const depositAmount = ethers.utils.parseEther("100")
  await Weth.deposit({value:depositAmount}); 

  const amountForSend= ethers.utils.parseEther("10");
  await Weth.transfer(xyzp.address,amountForSend);

  const blc = await Weth.balanceOf(xyzp.address);
  console.log("This is balance of WETH",blc);

  // const imperUSDC = "0X000";
  
  // await network.provider.request({
  //   method: "hardhat_impersonateAccount",
  //   params: [imperUSDC],
  // });
  
  // const signer = await ethers.getSigner(imperUSDC);
  
  // console.log(
  //   "Vitalik account before transaction",
  //   ethers.utils.formatEther(await signer.getBalance())
  //   );

  // const Token = await ethers.getContractAt("IERC20","0X000");
  // const amountForSend2= ethers.utils.parseEther("10");
  // await Token.transfer(xyzp.address,amountForSend2); 
  // const bl2c = await Token.balanceOf(xyzp.address);
  // console.log("This is balance of Token",bl2c);


  // await xyzp.createFlashLoan("0X000","1000000000000000000","0X000","0X000")
  
  console.log("Done");





  
  
  
  
  
  
  
  
  
  
  
  
  
  }




main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
