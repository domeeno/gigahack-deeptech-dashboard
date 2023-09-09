import React from 'react'

import SidePanel from '../component/SidePanel'

const Map = () => {
  return (
    <div className='flex flex-row justify-between items-center h-full'>
      <div className='flex flex-row items-center h-full w-full'>
        <SidePanel />
        <div className="flex w-full h-full justify-center items-center bg-clean shadow-inner">
          Map
        </div>
      </div>
    </div>
  )
}

export default Map
