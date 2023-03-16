import React from 'react'

const BlogCard = ({imageLink,blogTitle,blogDescription,blogLink}) => {

  return (
    <div className='flex flex-col p-4 max-w-xs bg-white rounded-md text-center '>
      <img src={imageLink} alt='' className='rounded-md max-h-48 object-cover' />
      <h1 className="text-gray-900 p-3 text-lg font-bold">{blogTitle}</h1>
      <p >{blogDescription}</p>
      <a href={blogLink} className='underline hover:text-gray-600'>visit blog</a>
    </div>
  )
}

export default BlogCard
