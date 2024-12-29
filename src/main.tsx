import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContextProvider } from './Context/Context.jsx'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Routers/Home.tsx'
import Subscribing from './Routers/Subscribing.tsx'
import './style.css'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"/subscribing",
    element:<Subscribing/>,
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
  </StrictMode>,
)
