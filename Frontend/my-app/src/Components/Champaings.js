import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import config from './Config.json';
import ContractABI from './ABI.json';
import ContractABI1 from './ABI1.json';
import { app } from "./Firebase";
import { getDatabase, ref, set } from "firebase/database";
const ethers = require('ethers');


let cardArr = config;

const storedArray = JSON.parse(localStorage.getItem('array'));
console.log(storedArray)
console.log(storedArray[0])
function Champcard({glArr}) {
   let newcampaignaddress=storedArray[0];
  const [amount, setAmount] = useState('');
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
  





    return (
      <div className='row' style={{ marginTop: '150px',marginLeft: '150px' }}>
    
       
    {cardArr.map( (eachcard,index) => (
      <div key={index} style={{ width: '33.33%', padding: '30px', boxSizing: 'border-box', float: 'left'}}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src='./images/solo.png' />
          <Card.Body>
            <Card.Title>{eachcard.title}</Card.Title>
            <Card.Text>
              {eachcard.text}
            </Card.Text>
            <input type="text" placeholder="Enter amount (ETH)" value={amount}  onChange={(e) => setAmount(e.target.value)}/>
            <Button variant="primary" onClick={loadData}  >Donate</Button>
          </Card.Body>
        </Card>
        </div>
        ))}
        </div>
      );
}

export default Champcard;