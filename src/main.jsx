import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from'react-router-dom'
import UserZodiacSign from './components/UserZodiacSign'


const router = createBrowserRouter([
  {
    path: '/Zodiac/',
    element: <App />,
    children: [
      {
        path: '/Zodiac/',
        element: <UserZodiacSign />
      }],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
