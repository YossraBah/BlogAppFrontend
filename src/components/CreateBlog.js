import React from 'react'
import BlogForm from './BlogForm'

const CreateBlog = () => {
  

 
  return (
    <div>
      <BlogForm initialValues={initialValues} onSubmit={onSubmit} validateOnBlur/>
    </div>
  )
}

export default CreateBlog
