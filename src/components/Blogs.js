import React, { useEffect } from "react";
import BlogCard from "./BlogCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs, deleteBlog } from "../features/blogSlice";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state.blog);

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
    if(blogState.status === 'fulfilled'){
      window.location.reload();
    }
    else alert("something went wrong")
  };

  const handleUpdate = (id) => {
    navigate(`/updateBlog/${id}`)
  };

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (blogState.status === "pending") {
    return <div>loading...</div>;
  }
  if (blogState.status === "rejected") {
    return <div>{blogState.error}</div>;
  }
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {blogState.blogs.map((blog) => {
        return (
          <React.Fragment key={blog._id}>
            <div className="flex flex-col bg-white rounded-md m-2 p-3" >
              <BlogCard
                key={blog._id}
                imageLink={blog.imageLink}
                blogTitle={blog.blogTitle}
                blogDescription={blog.blogDescription}
                blogLink={blog.blogLink}
              />
              <div className="flex justify-center gap-1">
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="text-white bg-gray-900 p-3 rounded-md"
                >
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
                <button
                  onClick={() => handleUpdate(blog._id) }
                  className="text-white bg-gray-900 p-3 rounded-md"
                >
                  <ion-icon name="pencil-outline"></ion-icon>
                </button>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Blogs;
