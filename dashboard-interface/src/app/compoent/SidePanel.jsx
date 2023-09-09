import React from 'react'

const SidePanel = () => {
  return (
    <div className='w-1/4 bg-dark-efes h-full flex items-center shadow-2xl-inner'>
      <div className='flex w-full flex-col justify-center items-center'>
        <a href='/' className='text-clean py-4'>Dashboard</a>
        <a href='/map' className='text-clean py-4'>Map</a>
      </div>
    </div>
  )
}

export default SidePanel