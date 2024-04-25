import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { Router } from './Route'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>,
)
