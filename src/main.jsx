import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './Error/Error.jsx'
import Home from './Home/Home.jsx'

const router = createBrowserRouter([{
  path:"/",element:<App/>,
  errorElement: <Error/>,

  children:[
    {path:"/",element:<Home/>}
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
