// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "./CrowdFunding.sol";

contract factoryCrowdFunding {
    event CampaignCreated(address campaignAddress);
    event ListOfCampaignsUpdated();
    address [] public listOfCampaigns;
    address public newCampaignAddress = address(0);
    mapping (address => uint256) whenTheCampaignWasDeployed;

    function createCampaign(uint256 goal, uint256 deadline, uint256 minimumFund) external returns(address) {
        CrowdFunding newCampaign = new CrowdFunding(goal, deadline, minimumFund);
        newCampaignAddress = address(newCampaign);
        listOfCampaigns.push(address(newCampaign));
        whenTheCampaignWasDeployed[address(newCampaign)] = block.timestamp;
       emit CampaignCreated(address(newCampaign));
        return address(newCampaign);
        
        
    }

    function getNewCampaignAddress() external view returns(address){
        return newCampaignAddress;
    }
    function getListOfCampaigns() external  returns( address[] memory){
       emit ListOfCampaignsUpdated();
        return listOfCampaigns;
        
    }
    function getTimeWhenCampaignWasDeployed(address _DeployedContract) external view returns(uint256){
        return whenTheCampaignWasDeployed[_DeployedContract];
    }
}