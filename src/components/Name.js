import React, { useState } from "react";

const Name = () => {
  const [input, setInput] = useState("");
  const [name, setName] = useState("Your Name");
  const [edit, setEdit] = useState(false);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setName(input);
    setEdit(!edit);
  };

  return edit ? (
    <form onSubmit={onSubmit}>
      <input value={input} onChange={onChange} />
      <button>Confirm</button>
      <button onClick={() => setEdit(!edit)}>Cancel</button>
    </form>
  ) : (
    <>
      <h3>{name}</h3>
      <button
        onClick={() => {
          setEdit(!edit);
          setInput(name);
        }}
      >
        Edit
      </button>
    </>
  );
};

export default Name;