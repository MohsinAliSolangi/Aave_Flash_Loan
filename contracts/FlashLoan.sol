// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@aave/core-v3/contracts/flashloan/base/FlashLoanSimpleReceiverBase.sol";
import "./interfaces/IERC20.sol";
import "./interfaces/IUniswapV2Router02.sol";
import "hardhat/console.sol";



contract SimpleFlashLoan is FlashLoanSimpleReceiverBase {

//   address public token1; //asset(Loantoken) to this(token1) token
//   address public token2; //token1 to token2 and in the end token2 to asset(Loantoken)
  address public owner;

  IUniswapV2Router02 private uniswapRouter;
  address public token1;
  address public token2;

  modifier onlyOwner {
    require(msg.sender == owner,"Only owner call");
    _;
  }

  event Log(address asset, uint val);

  constructor(IPoolAddressesProvider provider, address unswapV2) FlashLoanSimpleReceiverBase(provider) 
  {
    owner = msg.sender;
    uniswapRouter = IUniswapV2Router02(unswapV2);
  }


  function withdrawTokens(address token, uint256 _amount) public onlyOwner returns(bool) {
  require(IERC20(token).balanceOf(address(this)) > 0 ,"contract doesn't have tokens");
  bool status = IERC20(token).transfer(owner,_amount);
  return status; 
  } 

  function SwapeTokens(address _tokenOne, address _tokenTwo, uint256 _amount)internal returns(uint256){
    console.log(_tokenOne,_tokenTwo,_amount);
          
          IERC20 tokenInstance = IERC20(_tokenOne);
    require(tokenInstance.approve(address(uniswapRouter),_amount));
  
    address[] memory path = new address[](2);
        path[0] = _tokenOne;
        path[1] = _tokenTwo;

            console.log(path[0]);
            console.log(path[1]);
    
    uint256[] memory getamount = new uint256[](2);
        getamount = uniswapRouter.getAmountsOut(_amount,path);
          console.log(getamount[0]);
          console.log(getamount[1]);

          IERC20 tokenInstance1 = IERC20(_tokenTwo);
            console.log("before",tokenInstance1.balanceOf(address(this)));

    uniswapRouter.swapExactTokensForTokens(getamount[0], getamount[1], path, address(this), block.timestamp);
      
    console.log("after",tokenInstance1.balanceOf(address(this)));
    return getamount[1];
  } 
  
  function createFlashLoan(address asset, uint amount,address _tokenOne, address _tokenTwo) external {
    address receiver = address(this);
    bytes memory params = "";
    uint16 referralCode = 0;
    token1  =  _tokenOne;
    token2  =  _tokenTwo;
    POOL.flashLoanSimple(
      receiver,
      asset,
      amount,
      params,
      referralCode
    );
  }



  function executeOperation(
    address asset,
    uint256 amount,
    uint256 premium,
    address initiator,
    bytes calldata params
  ) external returns (bool){
    

  uint256 amountToken1 = SwapeTokens(asset,token1,amount);
          
            console.log("token1 OUt ",amountToken1);
    
    require(amountToken1 > 0,"Less output Token1 Amount");

  uint256 amountToken2 = SwapeTokens(token1,token2,amountToken1);   

            //  console.log("token2 OUt ",amountToken2);
        require(amountToken2 > 0,"Less output Token1 Amount");

    // require(token2.approve(address(uniswapRouter),amountToken2));

      uint256 amountToken3 = SwapeTokens(token2,asset,amountToken2);
   
      console.log("token3 OUt ",amountToken3);
        console.log("DONEEEEE");
    require(amountToken3 > amount,"This Pair is in Loss");
    uint256 amountOwing = (amount+premium);

    require(IERC20(asset).approve(address(POOL), amountOwing));
    return true;
  }
}