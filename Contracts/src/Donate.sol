// SPDX-License-Identifier: MIT
// lakshay code 

pragma solidity ^0.8.19;

contract CrowdFunding {
uint256 private immutable i_goal;
uint256 private immutable i_deadline;//in seconds //deadline ke  liye we need oracle network to interact with real time
address private immutable i_whoNeedFund;
uint256 private immutable i_minimumFund;
address[] private s_funders;
mapping(address => uint256) private s_addressToAmountFunded;
uint256 immutable i_TimeOfStart;
string private i_reason;

event SuccessfullyDonated(address indexed donar);
event SuccessfullyWithdrawn(address indexed owner);

constructor(uint256 goal, uint256 deadline, uint256 minimumFund, string memory reason){
    i_goal = goal;
    i_deadline = deadline;
    i_whoNeedFund = payable(msg.sender);
    i_minimumFund = minimumFund; 
    i_TimeOfStart = block.timestamp;
    i_reason = reason;//we will show this reason on donate page.
}
 
  function Donate() public payable /returns/{
    require(block.timestamp <= i_TimeOfStart + i_deadline, "Donations are closed");
    require(msg.value >= i_minimumFund,"Please Donate Some More Amount");
    
    s_addressToAmountFunded[msg.sender] += msg.value;
    s_funders.push(msg.sender);
    emit SuccessfullyDonated(msg.sender);
  }
    
    //fallback function
    receive() external payable {
        revert("This contract does not accept direct Ether transfers.");
    }
  function withdraw() external payable {
    require(i_whoNeedFund == msg.sender, "You cannot withdraw funds.");

        (bool success,) = i_whoNeedFund.call{value: address(this).balance}("");
        require(success, "Failed to withdraw the funds");
         emit SuccessfullyWithdrawn(msg.sender);
  }

function get_s_funders(uint256 index) external returns(address donar){
  return s_funders[index];
}
}