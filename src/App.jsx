import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Product from './pages/Product'
import Homepage from './pages/Homepage'
import Pricing from './pages/Pricing'
import AppLayout from './pages/AppLayout'
import PageNotFound from './pages/Pagenotfound'
import Login from './pages/Login'


const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='product' element={<Product/>} />
        <Route path='/' element={<Homepage/>} />
        <Route path='pricing' element={<Pricing/>} />
      <Route path='/login' element={<Login />} />
        <Route path='app' element={<AppLayout/>} />
        <Route path='*' element={<PageNotFound/>} />

      </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
