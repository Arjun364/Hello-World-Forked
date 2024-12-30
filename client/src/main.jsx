import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import Landingpage from './Pages/Landingpage'
import ErrorPage from './Pages/ErrorPage'

const router =createBrowserRouter([
  {
    path:'/',
    element:<Landingpage/>,
    errorElement:<ErrorPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
