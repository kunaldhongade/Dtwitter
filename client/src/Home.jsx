// import React from 'react'

// const Home = () => {
//     const connectWallet = async () => {
//         try {
//             const { ethereum } = window;

//             if (!ethereum) {
//                 console.log('Metamask not detected');
//                 return;
//             }

//             let chainId = await ethereum.request({ method: 'eth_chainId' })
//             console.log('Connected to chain: ' + chainId);

//             const gorliChainId = '0x5';

//             if (chainId !== gorliChainId) {
//                 alert('you ar not connected to the gorli testnet');
//                 setCorrectNetwork(false);
//                 return;
//             } else {
//                 setCorrectNetwork(true);
//             }

//             const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

//             console.log("Found Account", accounts[0])
//             setCurrentAccount(accounts[0]);
//         } catch (error) {
//             console.log("Error connecting to metamask ", error);
//         }
//     }

//     return (
//         <div>
//             <button
//                 className=''
//                 onClick={connectWallet}
//             >Connect Wallet</button>
//         </div>
//     )
// }

// export default Home
