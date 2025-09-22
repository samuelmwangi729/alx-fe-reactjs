import React from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'

const Homepage = () => {
  return (
    <div className='bg-gray-200 w-full  h-fit'>
      <Navbar/>
      <Search/>
    </div>
  )
}

export default Homepage
