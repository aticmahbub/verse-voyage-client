import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProvider from './provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import '@smastrom/react-rating/style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
    <AuthProvider>
      {/* <Toaster> */}
    <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>,
  </div>
)
