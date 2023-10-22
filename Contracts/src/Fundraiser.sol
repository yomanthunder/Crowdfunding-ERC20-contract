//SPDX-license-IDentifier: UNLICENSED
pragma solidity ^0.8.13;
contract Payable{
   address payable public owner;

  







constructor() payable {
    owner = payable(msg.sender);
}
function deposit() public payable {
    owner.transfer(msg.value);
}

// person can withdraw the equired funds
/** Now the modification i need to make is to set target of time which ticks down to zero and target amount that has to be set*/ 
function withdraw() public {
    uint amount = address(this).balance;
    (bool success ,) = owner.call{value: amount}("");
    require(success,"Failed to withdraw the funds");
}
// person can transfer the equired funds 
function transfer(address payable _to, uint _amount) public payable {
    (bool success,) = _to.call{value: _amount}("");
    require(success,"Failed to transfer the funds");
}
// person can get the balance(to how much fund has beed donated)
function getBalance() public view returns(uint){
    return address(this).balance;
}
}