import React from 'react'
import PageNav from '../components/PageNav'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
       <PageNav />
       <h1>Woldwise</h1>
       <Link to="App" > Go to the App</Link>
    </div>
  )
}

export default Homepage
