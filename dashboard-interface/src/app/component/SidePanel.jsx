import React from 'react'
import { useLocation } from 'react-router-dom'

const SidePanel = () => {
  const location = useLocation()
  const isMap = location.pathname === '/map'
  const isDashboard = location.pathname === '/'

  return (
    <div className='w-1/5 bg-dark-efes h-full flex items-center shadow-2xl-inner'>
      <div className='flex w-full flex-col justify-center items-center'>
        <div className='flex flex-row w-full justify-between items-center px-8'>
          <div>
            {isDashboard && <div className='w-2 h-2 bg-white rounded-full mr-2' />}
            {!isDashboard && <div className='w-2 h-2 bg-dark-efes rounded-full mr-2' />}
          </div>
          <div>
            <a href='/' className={`py-4 ${isDashboard ? 'text-clean' : 'text-gray-400'}`}>Dashboard</a>
          </div>
        </div>
        <div className='flex flex-row w-full justify-between items-center px-8'>
          {isMap && <div className='w-2 h-2 bg-white rounded-full mr-2' />}
          {!isMap && <div className='w-2 h-2 bg-dark-efes rounded-full mr-2' />}
          <a href='/map' className={`py-4 ${isMap ? 'text-clean' : 'text-gray-400'}`}>Map</a>
        </div>
      </div>
    </div>
  )
}

export default SidePanel
