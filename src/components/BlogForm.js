import React from "react";
import * as yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import InputField from "./InputField";
import { useDispatch } from "react-redux";
import { postBlog } from "../features/blogSlice";

const BlogForm = () => {
  const validationSchema = yup.object().shape({
    blogTitle: yup.string().required("Blog Title Required"),
    imageLink: yup.string().required("Image Link Required"),
    blogDescription: yup.string().required("Blog Description Required"),
    blogLink: yup.string().required("Blog Link Required"),
  });

  const initialValues = {
    blogTitle: "",
    imageLink: "",
    blogDescription: "",
    blogLink: "",
  };

  const dispatch = useDispatch()
  const onSubmit = (FormData,{resetForm}) => {
    dispatch(postBlog(FormData))
    resetForm()
    alert("Blog added successfully")
  };

  return (
    <div className="flex justify-center items-center p-10 rounded border-gray-900 bg-gray-100">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur
      >
        <div className=" p-9 rounded bg-white">
          <Form className="flex flex-col justify-center items-center">
            <h1 className="text-gray-900 p-2 text-lg font-bold">Blog Form</h1>
            <InputField name="blogTitle" type="text" placeholder="Blog title" />
            <ErrorMessage name="blogTitle">
              {(msg) => <div className="text-red-600">{msg}</div>}
            </ErrorMessage>

            <InputField
              type="text"
              name="imageLink"
              placeholder="Blog image link"
            />
            <ErrorMessage name="imageLink">
              {(msg) => <div className="text-red-600">{msg}</div>}
            </ErrorMessage>

            <InputField
              type="text"
              name="blogDescription"
              placeholder="Blog description"
            />
            <ErrorMessage name="blogDescription">
              {(msg) => <div className="text-red-600">{msg}</div>}
            </ErrorMessage>

            <InputField type="text" name="blogLink" placeholder="Blog link" />
            <ErrorMessage name="blogLink">
              {(msg) => <div className="text-red-600">{msg}</div>}
            </ErrorMessage>

            <button
              type="submit"
              className="text-white bg-gray-900 bold p-3 rounded-md"
            >
              Add Blog
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default BlogForm;
