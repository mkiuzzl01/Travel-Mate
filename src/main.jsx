import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './components/Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './components/AuthProvider/AuthProvider'
import Root from './components/Root/Root'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}>
     <Root></Root> 
    </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
)
