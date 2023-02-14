import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import './App.css';
import { useState, useEffect } from 'react';
// import Home from './Home';


function App() {

  const [currentAccount, setCurrentAccount] = useState('');
  const [correctNetwork, setCorrectNetwork] = useState(false);

  // call metamask to connect wallet on clicking connect wallet button
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log('Metamask not detected');
        return;
      }

      let chainId = await ethereum.request({ method: 'eth_chainId' })
      console.log('Connected to chain: ' + chainId);

      const gorliChainId = '0x5';

      if (chainId !== gorliChainId) {
        alert('you ar not connected to the gorli testnet');
        setCorrectNetwork(false);
        return;
      } else {
        setCorrectNetwork(true);
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      console.log("Found Account", accounts[0])
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log("Error connecting to metamask ", error);
    }
  }

  useEffect(() => {
    connectWallet();
  });

  return (
    <div>
      {currentAccount === '' ? (
        <div className='Default__home'>
          <h4>Welcome folks</h4>
          <h1>DTwitter</h1>
          <h6>Decentralized clone of twitter</h6>
          <div>
            <button
              className='btn'
              onClick={connectWallet}
            >Connect Wallet</button>
          </div>

        </div>

      ) : correctNetwork ? (
        <div className='app'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center mb-20 font-bold text-2xl gap-y-3'>
          <div>--------------------------------------------</div>
          <div>Please connect to the Goerli testnet</div>
          <div>and reload the page</div>
          <div>--------------------------------------------</div>
        </div>
      )}
    </div>
  );
}

export default App;
