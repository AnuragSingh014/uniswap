import './App.css'
import './index.css'
import { ethers } from 'ethers';
import { useState } from 'react';
import WalletButton from './components/WalletButton';
import Exchange from './components/Exchange';
import Loader from './components/Loader';

function App() {

  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const poolisLoading = false;
  async function connectWallet() {
    if (!connected) {
      // Connect the wallet using ethers.js
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const _walletAddress = await signer.getAddress();
      setConnected(true);
      setWalletAddress(_walletAddress);
    } else {
      // Disconnect the wallet
      window.ethereum.selectedAddress = null;
      setConnected(false);
      setWalletAddress("");
    }
  }

    return (
      <div className='flex justify-center min-h-screen sm:px-16 px-6 bg-slate-800'>
        <div className='flex justify-between items-center flex-col max-w-[1280px] w-full'>
          <header className='flex flex-row justify-between items-center w-full sm:py-10 py-6'>
            <img 
              src="/public/uniswapLogo.png"
              className='w-16 h--16 object-contain'
            />
            <WalletButton />
          </header>

          <div className='flex-1 flex justify-start items-center flex-col w-full mt-10'>
            <h1  className='text-white font-poppins font-black text-5xl tracking-wide'>uniswap 2.0</h1>
            <p className='text-white font-poppins font-medium mt-3 text-base'> Exchange tokens in second</p>

            <div className='mt-10 w-full flex justify-center'>
              <div className='relative md:max-w-[700px] md:min-w-[500px] min-w-full max-w-full gradient-border p-[2px] rounded-3xl'>
                <div className="absolute top-0 left-0 w-[123px] h-[123px] rounded-full bg-[#fb37ff] blur-[200px]"/>
                  <div className='w-full min-h-[400px] bg-slate-800 backdrop-blur-[4px] rounded-3xl shadow-card flex p-10'>
                    
                   {/* {connected ? (<h4 className="wal-add">{walletAddress}</h4> ) :(
                    <div>
                     <button className="btn" onClick={connectWallet}>
                      {connected ? "Disconnect Wallet" : "Connect Wallet"}
                    </button>

                    </div>
                   )} */}

                   {connected ? (
                    poolisLoading ? (
                      <Loader title="loading wait"/>
                    ) : (<Exchange />)
                   ):(<Loader title="connect your account"/>)}

                    {/* <button className="btn" onClick={connectWallet}>
                      {connected ? "Disconnect Wallet" : "Connect Wallet"}
                    </button>
                    <h3>Address</h3>
                    <h4 className="wal-add">{walletAddress}</h4> */}

                  </div>
                <div className='absolute bottom-0 right-0 w-[123px] h-[123px] rounded-full bg-[#18b2de] blur-[200px]'/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
