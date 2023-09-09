import { useRoutes } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import General from '../pages/General'

const config = [
  {
    path: "/", element: <Dashboard />
  },
  {
    path: "/general", element: <General />
  }
]


const RenderRoutes = () => {
  let routes = useRoutes(config)
  return routes
}

export default RenderRoutes