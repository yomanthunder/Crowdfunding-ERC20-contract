import React, { useState, useEffect } from 'react';
import ContractABI from './ABI.json';
import ContractABI1 from './ABI1.json';
import { app } from "./Firebase";

const ethers = require('ethers');

const contractAddress = '0xd20E65b1fc54300b098869510336f044A7352690';

function Integration({ l, setl }) {
    console.log(l)
    // setl([...l,'b']);
    
    const [amount, setAmount] = useState('');
    const [goal, setGoal] = useState('');
    const [deadline, setDeadline] = useState('');
    const [minimumFund, setMinimumFund] = useState('');
    const [newcampaignaddress, setNewCampaignsddress] = useState('');
    console.log(newcampaignaddress)


      const loadData = async () => {
        if (window.ethereum) {
          try {
            await window.ethereum.enable(); // Request user permission
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(newcampaignaddress, ContractABI1, provider);
            const gasLimit = 200000; // You can adjust this value as needed

            const donation = await contract.connect(signer).Donate({
              gasLimit,
              value: amount,
            });

            
          } catch (error) {
            alert('Error: ' + error.message);
          }
        } else {
          alert('Please install or enable MetaMask or a Web3-compatible browser extension.');
        }
      };


    const sendData = async (goal, deadline, minimumFund) => {
        if (window.ethereum) {
            console.log("hghj")
            try {
                await window.ethereum.enable(); // Request user permission
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(contractAddress, ContractABI, provider);
                const gasLimit = 3000000; // You can adjust this value as needed

                // **Fix the error by passing all three arguments to the createCampaign() function call:**
                console.log(goal, deadline, minimumFund);
                const sendDatato = await contract.connect(signer).createCampaign(goal, deadline, minimumFund, {
                    gasLimit,
                });
                const newcampaddress = await contract.getNewCampaignAddress();
                setNewCampaignsddress(newcampaddress);
                setl([...l,newcampaddress.toString()]);
                console.log(l)
                console.log(sendDatato)
            } catch (error) {
                alert('Error: ' + error.message);
            }
        } else {
            alert('Please install or enable MetaMask or a Web3-compatible browser extension.');
        }
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.goal.value)
        // console.log(e.target.deadline.value)
        // console.log(e.target.minimumFund.value)

        sendData(e.target.goal.value, e.target.deadline.value, e.target.minimumFund.value);
    }

    return (
        <div className="App d-flex justify-content-center align-items-center flex-column">
            <input
        type="text"
        placeholder="Enter amount (ETH)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={loadData}>Donate</button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter goal amount in ETH"
                    defaultValue={goal}
                    name='goal'
                    id='goal'
                />
                <input
                    type="text"
                    placeholder="Enter deadline in seconds "
                    defaultValue={deadline}
                    // onChange={(e) => setDeadline(e.target.defaultValue)}
                    name='deadline'
                    id='deadline'
                />
                <input
                    type="text"
                    placeholder="Enter amount (ETH)"
                    defaultValue={minimumFund}
                    // onChange={(e) => setMinimumFund(e.target.value)}
                    name='minimumFund'
                    id='minimumFund'
                />
                <button type='submit'>Send data</button>
            </form>
        </div>
    );
}

export default Integration;
