import React from 'react'

const Store = ({data}) => {
  return (
    <div className='flex flex-col bg-white p-4 m-4 rounded-lg shadow-lg'>
        <div className=''>{data.name}</div>
    </div>    
  )
}

export default Store