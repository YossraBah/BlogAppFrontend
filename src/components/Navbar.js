import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='text-white p-4 bg-gray-900 text-lg'>
            <ul className='flex p-2 list-none'>
                <li>BlogMernApp</li>
                <li className='ml-auto mr-5'><Link to={'/blogs'}>BlogsList</Link></li>
                <li><Link to={'/addBlog'}>Add Blog</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
