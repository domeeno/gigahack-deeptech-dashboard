import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row w-full justify-center items-stretch pt-4'>
      <div className='py-2 my-2 mx-4 flex-grow bg-white shadow-lg rounded-lg'/>
      <div className='py-2 my-2 mx-4 bg-white shadow-md rounded-lg'>
        <div className='flex flex-row items-center justify-center'>
          <h3 className='pr-4 pl-2 text-gray-600'>Good Efes Guy</h3>
          <div className="w-6 h-6 bg-gray-400 rounded-full mr-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Header