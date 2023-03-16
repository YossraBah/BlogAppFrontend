import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import App from './App'
import Navbar from './components/Navbar'
import BlogForm from './components/BlogForm'
import Home from './components/Home'
import UpdateBlog from './components/UpdateBlog'
const Root = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route  path='/blogs' element={<Home/>}/>
        <Route path='/addBlog' element={<BlogForm/>}/>
        <Route path='/updateBlog/:id' element={<UpdateBlog/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Root
