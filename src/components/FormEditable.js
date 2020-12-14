import React, { useState, useRef, useEffect } from "react";

const FormEditable = ({value, update}) => {
  const [edit, setEdit] = useState(false)
  const [input, setInput] = useState(value);

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitUpdate = (e) => {
    e.preventDefault()
    update(input)
    setEdit(!edit)
  }

  const toggleEdit = () => {
    setEdit(edit => !edit)
  }

  useEffect( () => {
    return [edit];
  })

  if (edit) {
    return (
      <form onSubmit={submitUpdate}>
        <>
          <input
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
          />
          <button onSubmit={submitUpdate}>Update</button>
        </>
      </form>
    )
  }

  return (
    <>
      <p>{value}</p>
      <button onClick={toggleEdit}>Edit</button>
    </>
  )
};

export default FormEditable;