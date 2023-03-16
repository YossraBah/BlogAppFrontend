import React from 'react'
import Blogs from './Blogs'
// import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col text-center'>
      <h1 className="text-gray-900 p-4 text-2xl font-bold">Blogs to share with your loved onces </h1>
      <Blogs/>
    </div>
  )
}

export default Home
