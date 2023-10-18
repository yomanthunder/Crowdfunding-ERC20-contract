import React, { useState } from 'react'


const WalletCard = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    const connectWalletHandler = () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            console.log("Metamask is here!");
            window.ethereum.request({ method: "eth_requestAccounts" }).then(result => {
                accountChangedHandler(result[0]);
                setConnButtonText("Wallet Connected");

            })
        }
        else {
            console.log("Need to install MetaMask");
            setErrorMessage("Please install MetaMask browser extension to interact with the smart contract");
        }

    }
    const accountChangedHandler = (newAccount) => {
        // newAccount is a state variable, we update it with the new account
        setDefaultAccount(newAccount);

    }
    const chainChangedHandler = () => {
        // reload the page to avoid any errors with chain change mid use of application
        window.location.reload();
    }
    window.ethereum.on('accountsChanged', accountChangedHandler);

    window.ethereum.on('chainChanged', chainChangedHandler);

    return (
        <div className='walletCard'>
            <h4> {"Connection to MetaMask using window.ethereum methods"} </h4>
            <button onClick={connectWalletHandler}>{connButtonText}</button>
            <div className='accountDisplay'>
                <h3>Address: {defaultAccount}</h3>
            </div>
            {errorMessage}
        </div>
    );

}
// need to write code to disconnect the wallet 
export default WalletCard;