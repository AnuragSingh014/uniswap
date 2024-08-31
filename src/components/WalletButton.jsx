import React from 'react'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'


const WalletButton = () => {

  const [rendered, setRendered] = useState("");

  return (
    <button
      onClick={() => {
        console.log("clicked");
      }}

      className='bg-site-pink border-none outline-none px-6 py-2 font-poppins font-bold text-lg text-white rounded-3xl leading-[24px] hover:bg-pink-600 transition-all'
    >
      {rendered==="" && "Connect Wallet"}
      {rendered !== "" && rendered}
    </button>
  )
}

export default WalletButton