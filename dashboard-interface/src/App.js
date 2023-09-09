import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import RenderRoutes from './app/routes'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="*" element={<RenderRoutes />} />
      </Routes>
    </Router>
  )
}

export default App
