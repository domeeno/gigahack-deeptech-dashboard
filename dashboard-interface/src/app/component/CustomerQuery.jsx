import React from 'react'

const CustomerQuery = ({ customer, handleClick }) => {
  return (
    <div className='flex flex-row hover:bg-gray-100 shadow-inner justify-between items-center border-gray-300'>
      <h3 className='text-gray-700 my-2 mx-4'>{customer.name}</h3>
      <h3 className='text-gray-700 my-2 mx-4'>{customer.city}</h3>
      <h3 className='text-gray-700 my-2 mx-4'>{customer.region}</h3>
      <h3 className='text-gray-700 my-2 mx-4'>{customer.srCode}</h3>
      <button onClick={() => handleClick(customer.id)}
        className='my-2 mx-4 cursor-pointer'>
        <h3 className='text-efes'>Add + </h3>
      </button>
    </div>
  )
}

export default CustomerQuery