const { expect } = require("chai");
const { ethers } = require("hardhat");
// const { ethers } = require("ethers");

describe("XYZ swapeNFT",  function ()  {

  let XYZnft;
  let XYZonPolygon;

  before(async () => {
    [deployer,per1, per2, per3, per4] = await ethers.getSigners()


  console.log("start");
  /////creating token /////////////

  
   XYZonPolygon = await ethers.getContractFactory("SimpleFlashLoan")
   XYZnft = await XYZonPolygon.deploy("0X000","0X000");
   await XYZnft.deployed()
  console.log("XYZPXnft mainnet deployed nft contract address", XYZnft.address);

  });

  it("Should deploy all smart contracts", async function () {

   
  const Weth = await ethers.getContractAt("IERC20","0X000");
  const depositAmount = ethers.utils.parseEther("100")
  await Weth.deposit({value:depositAmount}); 

  const blc = await Weth.balanceOf(deployer.address);
  console.log("This is balance of WETH",blc);

  const amountForSend= ethers.utils.parseEther("10");
  await Weth.transfer(XYZnft.address,amountForSend);

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
  // await Token.transfer(XYZnft.address,amountForSend2); 
  // const bl2c = await Token.balanceOf(XYZnft.address);
  // console.log("This is balance of Token",bl2c);

   await XYZnft.createFlashLoan("0X000","1000000000000000000","0X000","0X000") 

  });



});
