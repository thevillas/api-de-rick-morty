import { useState } from 'react';

export const UseUserForm = (initialState = {}) => {

  const [form, setform] = useState(initialState)

  const handleChange = ({target}) => {
    const {name , value} = target;

    console.log("target", target)
    console.log("name", name)
    console.log("value", target)

    setform({
        ...form, 
        [name]: value
    })
  }

  return {
    form , setform, handleChange,
  }
}