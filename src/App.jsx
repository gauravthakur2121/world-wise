import React, { useEffect, useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Product from './pages/Product'
import Homepage from './pages/Homepage'
import Pricing from './pages/Pricing'
import AppLayout from './pages/AppLayout'
import PageNotFound from './pages/Pagenotfound'
import Login from './pages/Login'
import CityList from './components/CityList'


const App = () => {

  const BASE_URL = "http://localhost:9000"

  const [cities , setCities] = useState([])
  const [isloading , setIsLoading] = useState(false)

  useEffect (function() {
    async function fetchCities(){
      try{
        setIsLoading(true)
      const res = await fetch(`${BASE_URL}/cities`)
      const data =  await res.json()
      setCities(data)
    }

   catch{
      alert("there was an error loading data...")
    }
    finally{
      setIsLoading(false)
    }
  }
  fetchCities()
  },[])
  
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='product' element={<Product/>} />
        <Route index element={<Homepage/>} />
        <Route path='pricing' element={<Pricing/>} />
      <Route path='/login' element={<Login />} />
        <Route path='app' element={<AppLayout/>} >
          <Route index element={ <CityList cities={cities} isloading = {isloading} />} />
          <Route path='cities' element={ <CityList cities={cities} isloading={isloading} />} />
          <Route path='countries' element={<p>countries</p>} />
          <Route path='form' element={<p>Form</p>} />
           </Route>
        <Route path='*' element={<PageNotFound/>} />

      </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
