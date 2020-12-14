import React, {useState} from "react";

const ContactMe = () => {
  const [phone, setPhone] = useState("00000000")
  const [email, setEmail] = useState("email@email.com")
  const [edit, setEdit] = useState(false)

  const onChangePhone = (e) => {
    setPhone(e.target.value)
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    setEdit(false)
  }

  return (
    <div>
      <div>Contact Me</div>
      {!edit && <button onClick={() => setEdit(!edit)}>Edit</button> }
      <div>
        {edit ? (
          <form onSubmit={onSubmit}>
            <input value={phone} onChange={onChangePhone} />
            <input value={email} onChange={onChangeEmail} />
            <button>Confirm</button>
            <button onClick={() => setEdit(false)}>Cancel</button>
          </form>
          ) : (
          <>
          <h3>Phone: {phone}</h3>
          <h3>Email: {email}</h3>
          </>)}
        </div>
    </div>
  );
};

export default ContactMe;

