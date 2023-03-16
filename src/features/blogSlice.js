import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/blogs";

const initialState = {
  status: "idle",
  blogs: [],
  error: null,
};

export const fetchBlogs = createAsyncThunk("blogs/fetch", async () => {
  const response = await axios.get(`${API_URL}/getBlogs`);
  return response.data;
});

export const postBlog = createAsyncThunk("blogs/post", async (formData) => {
  const response = await axios.post(`${API_URL}/addBlog`, formData);
  return response.data;
});

export const updategBlog = createAsyncThunk(
    'blogs/update',async(formData)=>{
      const url = window.location.href
      const id = url.split("/").pop()
      console.log(id)
      const response = await axios.put(`${API_URL}/updateBlog/${id}`,formData)
      return response.data
    }
)

export const deleteBlog = createAsyncThunk("blogs/deleteblog", async (id) => {
  const response = await axios.delete(`${API_URL}/deleteBlog/${id}`);
  return response.data;
});

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.blogs = action.payload;
    });
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
    builder.addCase(postBlog.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.blogs.push(action.payload) 
    });
    builder.addCase(postBlog.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message 
    });
    builder.addCase(deleteBlog.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.blogs = action.payload;
    });
    builder.addCase(deleteBlog.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default blogSlice.reducer;
