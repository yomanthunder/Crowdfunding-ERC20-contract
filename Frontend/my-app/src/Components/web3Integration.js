import React, { useState, useEffect } from 'react';
import ContractABI from './ABI.json';
import ContractABI1 from './ABI1.json';
import { app } from "./Firebase";
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app);//creatting an insance of firebase
const ethers = require('ethers');
const contractAddress = '0x927E87dCEC4c8BdEAEB847AA151370C403C4349E';


function Integration({ l, setl }) {
    const [prevArray, setPrevArray] = useState([]);
    console.log(l)
    // setl([...l,'b']);
    
    const [amount, setAmount] = useState('');
    const [goal, setGoal] = useState('');
    const [deadline, setDeadline] = useState('');
    const [minimumFund, setMinimumFund] = useState('');
    const [newcampaignaddress, setNewCampaignsddress] = useState('');
    console.log(newcampaignaddress)
    
    const putData =()=>{
        // set(ref(db,"user/shrish"),{
        //     id :1,
        //     name : "shrish",
        //     age : 25,
        //     param:"hello",
        //     array:l
        // })
            let storedArray = window.localStorage.getItem('array');
            if (storedArray) {
              // Parse the stored array from the JSON string
              storedArray = JSON.parse(storedArray);
            } else {
              storedArray = []; // Initialize as an empty array if it doesn't exist in local storage
            }
          
            // Concatenate the new value 'l' to the stored array
            storedArray = storedArray.concat(l);
          
            // Store the updated array in local storage as a JSON string
            localStorage.setItem('array', JSON.stringify(storedArray));
          
            // Update the state with the modified stored array
            setPrevArray(storedArray);
          
            console.log(prevArray);
          };
          
          
          

      const DoWithdraw = async () => {
        if (window.ethereum) {
          try {
            await window.ethereum.enable(); // Request user permission
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(newcampaignaddress, ContractABI1, provider);
            const gasLimit = 200000; // You can adjust this value as needed

            const Withdraw = await contract.connect(signer).withdraw({
              gasLimit,
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
        <div className="login template d-flex justify-content-center align-items-center  vh-50 ">
            <div className="form-container p-5 rounded bg-light vh-50">

            <form onSubmit={handleSubmit}>
                <div className="mb-3 mx-auto">
                <label className='px-3' htmlFor="goal">goal</label>
                <input
                    type="text"
                    placeholder="Enter goal amount in wei"
                    defaultValue={goal}
                    name='goal'
                    id='goal'
                />
                </div>
                <div className="mb-3  mx-auto flex-column">
                <label className='px-3' htmlFor="deadline">deadline</label>
                <input
                    type="text"
                    placeholder="Enter deadline in seconds "
                    defaultValue={deadline}
                    // onChange={(e) => setDeadline(e.target.defaultValue)}
                    name='deadline'
                    id='deadline'
                />
                </div>
                <div  className="mb-3 mx-auto mx-2">
                <label className='px-3' htmlFor="minimumfund">minimumFund</label>
                <input
                    type="text"
                    placeholder="Enter amount wei "
                    defaultValue={minimumFund}
                    // onChange={(e) => setMinimumFund(e.target.value)}
                    name='minimumFund'
                    id='minimumFund'
                />
                </div>
                <button type='submit' className='mx-auto btn btn-primary'>Send data</button>
                <button className="mx-3 btn btn-warning" onClick={putData}>put data</button>
                <input
        type="text"
        className='mb-3 btn btn-Danger'
      /> 
       <button onClick={DoWithdraw}>Withdraw</button>
            </form>
           
            </div>
        </div>
    );
}

export default Integration;
