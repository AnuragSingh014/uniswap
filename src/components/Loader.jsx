import React from 'react'


const Loader = ({title}) => {
  return (
    <div className='flex justify-center items-center flex-col w-full min-h-full'>
      <img src="/public/ethereumLogo.png" 
        className='w-56 h-56 object-contain'
      />
      <p className='font-poppins font-normal text-white text-lg text-center mt-10 capitalize'>{title}</p>
    </div>
  )
}

export default Loader