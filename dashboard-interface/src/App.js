import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import RenderRoutes from './app/routes'
import SidePanel from './app/compoent/SidePanel'

const App = () => {

  return (

    <div className='flex flex-row justify-between items-center h-full'>
      <div className='flex flex-row items-center h-full w-full'>
        <SidePanel />
        <Router>
          <Routes>
            <Route path="*" element={<RenderRoutes />} />
          </Routes>
        </Router>
      </div>
    </div >
  )
}

export default App
