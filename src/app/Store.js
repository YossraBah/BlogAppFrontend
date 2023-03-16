import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../features/blogSlice'

const store = configureStore({
    reducer:{
        blog:blogReducer
    }
})
export default store