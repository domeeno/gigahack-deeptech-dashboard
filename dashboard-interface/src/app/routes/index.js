import { useRoutes } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Map from '../pages/Map'

const config = [
  {
    path: "/", element: <Dashboard />
  },
  {
    path: "/map", element: <Map />
  }
]


const RenderRoutes = () => {
  let routes = useRoutes(config)
  return routes
}

export default RenderRoutes