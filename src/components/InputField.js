import React from 'react'
import { Field } from 'formik'

const InputField = (props) => {
  return (
    <Field  {...props} className="p-2 m-2 rounded-md border-2 border-solid border-gray-800" />
  )
}

export default InputField
