//SPDX-license-IDentifier: MIT
pragma solidity ^0.8.13;
contract CollectFund {
   
//Defining a struct for the campaign
struct Campaign {
    string description;
    address owner;
    uint value;
    bool completed;
}

// STORAGE VARIABLES
    uint public deadline;             // DEADLINE IN BLOCK NUMBER
    uint public goal;                 // AMOUNT NEEDS TO BE RAISED
    uint public raisedAmount = 0 ;    // AMOUNT RAISED 

Campaign[] public campaigns;// LIST OF CAMPAIGNS in the structure of the above struct


    mapping(address => uint) public contributions;
    uint public TotalContributions;

    /* 
    We just initialize some of our Static Storage Variables. I call them Static because they will not change with time
    . That's why they should be defined in the constructor as a constructor is called only once (at the time of deployment)
    */ 
address payable public owner;
constructor(uint _deadline, uint _goal) payable {

    deadline = block.number + _deadline;// taking average time of minning a block as 15 seconds 
    //(this basic calculation i will manage in frontend)
    goal = _goal;
    owner = payable(msg.sender);
}

function contributer() public payable{
    require(block.number>=deadline,"Deadline is over");
    if(contributions[msg.sender] == 0){
        TotalContributions++;
    }
    contributions[msg.sender]+=msg.value;
    raisedAmount += msg.value;
}


// person can withdraw the equired funds
/** Now the modification i need to make is to set target of time which ticks down to zero and target amount that has to be set*/ 
function withdraw() public {
    require(block.number>=deadline && raisedAmount>=goal,"Deadline is over");
    
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
